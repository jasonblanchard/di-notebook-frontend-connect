import ActiveLink from "./ActiveLink";
import useListEntries from "queries/useListEntries";
import React from "react";
import { button } from "styles/classnames";
import ReactMarkdown from "react-markdown";

export default function EntryListNav() {
  const { data, hasNextPage, isSuccess, fetchNextPage } = useListEntries({
    pageSize: 25,
  });

  return (
    <>
      <div className="mt-2">
        {isSuccess && (
          <>
            {data.pages.map((group, i) => {
              return (
                <React.Fragment key={i}>
                  {group.entries.map((entry) => {
                    const preview =
                      entry.text === "" ? "New Entry" : entry.text;

                    return (
                      <div key={entry.id} className="w-full">
                        <ActiveLink
                          href={`/workspace/${entry.id}`}
                          activeClassName="bg-neutral-700"
                        >
                          <a className="block bg-neutral-600 px-2 py-2 leading-8 line-clamp-1 hover:bg-neutral-700">
                            <ReactMarkdown>{preview}</ReactMarkdown>
                          </a>
                        </ActiveLink>
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
            {data.pages[0].entries?.length === 0 && (
              <div className="block bg-neutral-600 px-2 py-2">
                No entries yet
              </div>
            )}
          </>
        )}
        {hasNextPage && (
          <div className="mt-2 mb-10 flex justify-center">
            <button
              className={button.secondary}
              onClick={() => fetchNextPage()}
            >
              more
            </button>
          </div>
        )}
      </div>
    </>
  );
}
