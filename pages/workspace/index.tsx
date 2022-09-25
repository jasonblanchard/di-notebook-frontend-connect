import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

import ConnectServiceProvider from "queries/ConnectServiceProvider";
import useProtectedRoute from 'pages/useProtectedRoute';

const queryClient = new QueryClient();

import SidebarLayout from "components/layout/SidebarLayout";
import EntryZero from "components/EntryZero";
import EntryListNav from "components/EntryListNav";

export default function WorkspacePage() {
    useProtectedRoute();
    
    return (
        <QueryClientProvider client={queryClient}>
            <ConnectServiceProvider>
                <SidebarLayout nav={<EntryListNav />}>
                    <EntryZero />
                </SidebarLayout>
            </ConnectServiceProvider>
        </QueryClientProvider>
    )
}