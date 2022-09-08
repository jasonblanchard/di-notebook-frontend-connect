import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { useRouter } from "next/router";

import useGetEntry from "queries/useGetEntry";
import useWriteToEntry from 'queries/useWriteToEntry';

export default function EntryEditor() {
    const router = useRouter();
    const { id } = router.query;
    const { data, isSuccess } = useGetEntry({ id: parseInt(id as string, 10) });
    const writeToEntry = useWriteToEntry();

    const [text, setText] = useState('');

    useEffect(() => {
        if (isSuccess) {
            setText(data?.entry?.text);
        }
    }, [data, isSuccess]);

    const debouncedChangeHandler = useMemo(() => {
        return debounce((text) => {
            writeToEntry.mutate({ id: parseInt(id as string, 10), text });
        }, 1000, { maxWait: 10000 });
    }, [id]);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value);
        debouncedChangeHandler(event.target.value);
    }

    return (
        <div className="flex py-12 h-full flex-col lg:max-w-3xl mx-auto">
            <div className="flex mb-2 justify-between text-sm text-neutral-400">
                <div>
                    {!writeToEntry.isError && (
                        writeToEntry.isLoading ? 
                            <div className="flex items-center"><div className="rounded-full bg-yellow-400 h-3 w-3 mr-1" />Saving...</div>
                            : <div className="flex items-center"><div className="rounded-full bg-green-400 h-3 w-3 mr-1" />Saved</div>
                        )
                    }
                    {writeToEntry.isError && <div className="flex items-center"><div className="rounded-full bg-red-400 h-3 w-3 mr-1" />Error</div>}
                </div>
                <div>
                    {`${data?.entry?.createdAt?.toDate().toLocaleString()}${data?.entry?.updatedAt ? ` • ${data?.entry?.updatedAt.toDate().toLocaleString()}` : ""}`}
                </div>
            </div>
            <div className="w-full flex-1 relative">
                <textarea
                    className="w-full absolute top-0 bottom-0 bg-neutral-100 border resize-none border-neutral-200 rounded-0 p-4 shadow text-neutral-700 leading-relaxed border-none focus:ring-2 focus:ring-primary-400"
                    value={text}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}