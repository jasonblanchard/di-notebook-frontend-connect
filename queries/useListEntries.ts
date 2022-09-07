import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ConnectServiceProviderContext } from './ConnectServiceProvider';

export default function useListEntries({ pageSize }: { pageSize: number }) {
    const client = useContext(ConnectServiceProviderContext);
    
    let token = '';
    if (global.window) {
        token = localStorage.getItem('idToken');
    }

    return useQuery(["ListEntries"], () => client.listEntries({ pageSize }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }));
}