import { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ConnectServiceProviderContext } from './ConnectServiceProvider';

export default function useUndeleteEntry() {
    const client = useContext(ConnectServiceProviderContext);
    const queryClient = useQueryClient();
    
    let token = '';
    if (global.window) {
        token = localStorage.getItem('idToken');
    }
    return useMutation<any, any, { id: number }>(["UndeleteEntry"], ({ id }) => client.undeleteEntry({ id }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }), {
        onSuccess: () => {
            queryClient.invalidateQueries(['ListEntries']);
        }
    });
}