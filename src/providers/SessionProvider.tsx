import { FC, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetMeQuery } from '@/src/redux/api/auth';

interface ProtectedRouteProps {
	children: ReactNode;
}

export const SessionProvider: FC<ProtectedRouteProps> = ({ children }) => {
	const { status } = useGetMeQuery();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleNavigation = () => {
		switch (pathname) {
			case '/auth/login':
			case '/auth/registration':
			case '/auth/confirm':
			case '/auth/forgot':
				if (status === 'fulfilled') {
					navigate('/');
				}
				break;
			case '/':
			case '/chat':
			case '/chat:userName':
			case '/notifications':
			case '/settings':
			case '/side/public':
			case '/public':
				if (status === 'rejected') {
					localStorage.removeItem('auth_token');
					localStorage.removeItem('isAuth');
					localStorage.removeItem('userId');
					sessionStorage.removeItem('auth_token');
					sessionStorage.removeItem('isAuth');
					sessionStorage.removeItem('userId');
					navigate('/auth/login');
				}
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		handleNavigation();
	}, [status, pathname, navigate]);

	return children;
};
