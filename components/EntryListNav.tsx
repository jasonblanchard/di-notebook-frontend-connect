import Link from 'next/link';

import useListEntries from 'queries/useListEntries';

export default function EntryListNav() {
    const { data, isSuccess } = useListEntries({ pageSize: 25 });

    return (
        <>
            <div className="mt-2">
                {isSuccess && data.entries.map(entry => {
                    const preview = entry.text === "" ? "New Entry" : entry.text;

                    return (
                        <div key={entry.id} className="w-full">
                            <Link href={`/workspace/${entry.id}`}>
                                <a className="block px-2 py-2 bg-neutral-600 hover:bg-neutral-700 line-clamp-1 leading-8">{preview}</a>
                            </Link>
                        </div>
                    )                
                })}
            </div>
        </>
    )
}