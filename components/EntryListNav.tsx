import Link from 'next/link';

const entries = [
    {
        id: 1,
        text: 'first entry blahh dee blah'
    },
    {
        id: 2,
        text: 'second entry blahh dee blah as asdfasdafd\n\nasdfasdfasd'
    },
]

export default function EntryListNav() {
    return (
        <>
            <div className="mt-2">
                {entries.map(entry => {
                    return (
                        <div key={entry.id} className="w-full">
                            <Link href={`/workspace/${entry.id}`}>
                                <a className="block px-2 py-2 bg-neutral-600 hover:bg-neutral-700 line-clamp-1 leading-8">{entry.text}</a>
                            </Link>
                        </div>
                    )                
                })}
            </div>
        </>
    )
}