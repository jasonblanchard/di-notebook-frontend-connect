import React, { useState } from "react";
import useListEntries from "queries/useListEntries";
import { button } from "styles/classnames";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchPreview from "./SearchQueryPreview";

export default function Search() {
  const { data, hasNextPage, isSuccess, fetchNextPage, isRefetching } =
    useListEntries({
      pageSize: 25,
    });
  const [query, setQuery] = useState("");

  return (
    <div className="mt-10">
      <label className="relative mx-auto block max-w-lg">
        <span className="sr-only">search</span>
        <input
          placeholder="search"
          value={query}
          autoFocus
          className="block w-full rounded-md border-gray-300 p-2 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <MagnifyingGlassIcon className="h-6 w-6 text-neutral-500" />
        </div>
      </label>
      {query && isSuccess && (
        <>
          {data.pages.map((group, i) => {
            return (
              <React.Fragment key={i}>
                {group.entries
                  .filter((entry) =>
                    entry.text
                      .toLocaleLowerCase()
                      .includes(query.toLocaleLowerCase())
                  )
                  .map((entry) => {
                    const preview =
                      entry.text === "" ? "New Entry" : entry.text;

                    return (
                      <div key={entry.id} className="w-full">
                        <SearchPreview
                          query={query}
                          text={entry.text}
                          id={entry.id}
                        />
                      </div>
                    );
                  })}
              </React.Fragment>
            );
          })}
          {data.pages[0].entries?.length === 0 && (
            <div className="block bg-neutral-600 px-2 py-2">No entries yet</div>
          )}
          {hasNextPage && (
            <div className="mt-2 mb-10 flex justify-center">
              <button
                className={`${button.secondary} flex items-center`}
                onClick={() => fetchNextPage()}
              >
                keep searching
                {isRefetching && (
                  <div
                    className="spinner-border ml-2 inline-block h-6 w-6 animate-spin rounded-full border-4 border-neutral-300 border-r-primary-400"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
