import { useContext } from 'react';
import { ContextAuth }  from '../hok/ProviderAuth';

export function useAuth() {
    return useContext(ContextAuth);
}