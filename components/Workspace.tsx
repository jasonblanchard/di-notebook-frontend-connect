import { useRouter } from "next/router";

import EntryEditor from "components/EntryEditor";
import useGetEntry from "queries/useGetEntry";
import Loading from "components/Loading";

export default function Workspace() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetEntry({
    id: parseInt(id as string, 10),
  });

  if (isError) {
    return (
      <div className="flex py-12 h-full flex-col items-center lg:max-w-3xl mx-auto">
        No Found
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center mt-12">
        <Loading />
      </div>
    );
  }

  return (
    <EntryEditor
      key={data.entry.id}
      initialText={data.entry.text}
      id={parseInt(id as string, 10)}
      createdAt={data.entry.createdAt.toDate()}
      updatedAt={data?.entry?.updatedAt?.toDate()}
    />
  );
}
