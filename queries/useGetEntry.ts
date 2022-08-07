import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ConnectServiceProviderContext } from './ConnectServiceProvider';

export default function useGetEntry({ id }: { id: string }) {
    const client = useContext(ConnectServiceProviderContext);
    return useQuery(["GetQuery", id], () => client.getEntry({ id }));
}