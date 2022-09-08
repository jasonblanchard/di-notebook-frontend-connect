import ActiveLink from './ActiveLink';
import useListEntries from 'queries/useListEntries';
import React from 'react';
import { button } from 'styles/classnames';

export default function EntryListNav() {
    const { data, hasNextPage, isSuccess, fetchNextPage } = useListEntries({ pageSize: 25 });

    return (
        <>
            <div className="mt-2">
                {isSuccess && (
                    <>
                        {data.pages.map((group, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {group.entries.map(entry => {
                                        const preview = entry.text === "" ? "New Entry" : entry.text;

                                        return (
                                            <div key={entry.id} className="w-full">
                                                <ActiveLink href={`/workspace/${entry.id}`} activeClassName="bg-neutral-700">
                                                    <a className="block px-2 py-2 bg-neutral-600 hover:bg-neutral-700 line-clamp-1 leading-8">{preview}</a>
                                                </ActiveLink>
                                            </div>
                                        )
                                    })}
                                </React.Fragment>
                            )
                        })}
                    </>
                )}
                {hasNextPage && (
                    <div className="flex justify-center mt-2 mb-10">
                        <button className={button.secondary} onClick={() => fetchNextPage() }>more</button>
                    </div>
                )}
            </div>
        </>
    )
}