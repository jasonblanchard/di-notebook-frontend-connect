import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ConnectServiceProviderContext } from './ConnectServiceProvider';

export default function useListEntries({ pageSize }: { pageSize: number }) {
    const client = useContext(ConnectServiceProviderContext);
    return useQuery(["ListEntries"], () => client.listEntries({
        pageSize,
    }));
}