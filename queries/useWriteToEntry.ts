import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';

import { ConnectServiceProviderContext } from './ConnectServiceProvider';

export default function useWriteToEntry() {
    const client = useContext(ConnectServiceProviderContext);
    
    let token = '';
    if (global.window) {
        token = localStorage.getItem('idToken');
    }
    return useMutation<any, any, { text: string, id: number }>(["writeToEntry"], ({ text, id }) => client.writeToEntry({ id, text }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }));
}