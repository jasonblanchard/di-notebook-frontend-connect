import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

import useGetEntry from "queries/useGetEntry";
import useListEntries from 'queries/useListEntries';
import ConnectServiceProvider from "queries/ConnectServiceProvider";

export default function() {
    return (
        <QueryClientProvider client={queryClient}>
            <ConnectServiceProvider>
                <Page />
            </ConnectServiceProvider>
        </QueryClientProvider>
    )
}

function Page() {
    // const getEntryResponse = useGetEntry({ id: 123 });
    const listEntriesResponse = useListEntries({ pageSize: 100 });

    return (
        <div>
            Chello
            {/* <div>
                Single entry:
                {getEntryResponse.isSuccess && getEntryResponse.data.entry.text}
            </div> */}
            <div>
                List of entries:
                <ul>
                    {listEntriesResponse.isSuccess && listEntriesResponse.data.entries.map(entry => {
                        return (
                            <li key={entry.id}>{entry.id}: {entry.text}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}