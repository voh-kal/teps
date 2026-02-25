import { useAuth } from './useAuth';

export function useCreateEvent() {
    const { isAuthenticated } = useAuth();
    
    const handleCreateEvent = () => {
        if (isAuthenticated) {
            window.location.href = `${import.meta.env.VITE_BASE_URL}/users/general/dashboard`;
        } else {
            const redirect = '/create-event';
            window.location.href = `${import.meta.env.VITE_BASE_URL}/sso/token?redirect=${encodeURIComponent(redirect)}`;
        }
    };

    return { handleCreateEvent, isAuthenticated };
}