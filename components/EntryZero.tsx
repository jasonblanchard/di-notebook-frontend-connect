import { button } from "styles/classnames";
import PlaceholderText from "./PlaceholderText";
import useBeginNewEntry from "queries/useBeginNewEntry";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function EntryZero() {
  const beginNewEntry = useBeginNewEntry();
  const router = useRouter();

  useEffect(() => {
    if (beginNewEntry.isSuccess) {
      router.push(`/workspace/${beginNewEntry.data.entry.id}`);
    }
  }, [beginNewEntry.isSuccess, beginNewEntry.data]);

  return (
    <div className="mx-auto lg:max-w-lg">
      <button
        onClick={() => beginNewEntry.mutate({ text: "" })}
        className="mt-24 block h-96 w-full rounded-lg border-2 border-dashed border-neutral-300 p-28 text-center hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
      >
        <PlaceholderText />
        <span className="text-primary-400">Start writing</span>
      </button>
    </div>
  );
}
