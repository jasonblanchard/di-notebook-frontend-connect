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
        <div className="lg:max-w-3xl mx-auto min-h-[90%] relative my-8">
            <textarea
                className="w-full absolute top-0 bottom-0 bg-neutral-100 border resize-none border-neutral-200 rounded-0 p-4 shadow text-neutral-700 leading-relaxed border-none focus:ring-2 focus:ring-primary-400"
                value={text}
                onChange={handleChange}
            />
        </div>
    )
}