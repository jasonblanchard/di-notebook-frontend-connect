import { button } from 'styles/classnames';
import PlaceholderText from './PlaceholderText';
import useBeginNewEntry from 'queries/useBeginNewEntry';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EntryZero() {
    const beginNewEntry = useBeginNewEntry();
    const router = useRouter();

    useEffect(() => {
        if (beginNewEntry.isSuccess) {
            router.push(`/workspace/${beginNewEntry.data.entry.id}`)
        }
    }, [beginNewEntry.isSuccess, beginNewEntry.data]);

    return (
        <div className="lg:max-w-lg mx-auto">
            <button onClick={() => beginNewEntry.mutate({ text: '' })}  className="mt-24 block w-full h-96 rounded-lg border-2 border-dashed border-neutral-300 p-28 text-center hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
                <PlaceholderText />
                <span className="text-primary-400 font-semibold">Start writing</span>
            </button>
        </div>
    )
}