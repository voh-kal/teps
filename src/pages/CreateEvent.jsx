import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import config from '../config/api';

export default function CreateEvent() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            // Send user to Laravel SSO endpoint
            const redirect = window.location.href;
            window.location.href =
                `${config.API_BASE_URL}/sso/token?redirect=${encodeURIComponent(redirect)}`;
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) return <p>Redirecting to login...</p>;

    return <div>Create Event Form...</div>;
}