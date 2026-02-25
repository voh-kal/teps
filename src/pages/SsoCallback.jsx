import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config/api';

export default function SsoCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const redirect = params.get('redirect') || '/';

        if (!token) {
            navigate('/login');
            return;
        }

        fetch(`${config.API_BASE_URL}/api/sso/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('auth_token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    window.location.href = `${import.meta.env.VITE_BASE_URL}/users/dashboard`;
                } else {
                    navigate('/login');
                }
            })
            .catch(() => navigate('/login'));
    }, []);

    return <p>Authenticating...</p>;
}