import { useContext } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { ConnectServiceProviderContext } from './ConnectServiceProvider';

export default function useListEntries({ pageSize }: { pageSize: number }) {
    const client = useContext(ConnectServiceProviderContext);
    
    let token = '';
    if (global.window) {
        token = localStorage.getItem('idToken');
    }
    
    return useInfiniteQuery(["ListEntries"], ({ pageParam }) => client.listEntries({ pageSize, pageToken: pageParam }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }), {
        getNextPageParam: (lastPage, pages) => {
            return lastPage.nextPageToken;
        },
    });
}