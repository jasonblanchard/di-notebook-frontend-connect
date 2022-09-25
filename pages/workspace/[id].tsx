import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

import ConnectServiceProvider from "queries/ConnectServiceProvider";

const queryClient = new QueryClient();

import SidebarLayout from "components/layout/SidebarLayout";
import Workspace from "components/Workspace";
import EntryListNav from "components/EntryListNav";
import useProtectedRoute from 'pages/useProtectedRoute';

export default function WorkspaceEntryPage() {
    useProtectedRoute()

    return (
        <QueryClientProvider client={queryClient}>
            <ConnectServiceProvider>
                <SidebarLayout nav={<EntryListNav />}>
                    <Workspace />
                </SidebarLayout>
            </ConnectServiceProvider>
        </QueryClientProvider>
    )
}