import { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ConnectServiceProviderContext } from './ConnectServiceProvider';

export default function useDeleteEntry() {
    const client = useContext(ConnectServiceProviderContext);
    const queryClient = useQueryClient();
    
    let token = '';
    if (global.window) {
        token = localStorage.getItem('idToken');
    }
    return useMutation<any, any, { id: number }>(["DeleteEntry"], ({ id }) => client.deleteEntry({ id }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }), {
        onSuccess: () => {
            queryClient.invalidateQueries(['ListEntries']);
        }
    });
}