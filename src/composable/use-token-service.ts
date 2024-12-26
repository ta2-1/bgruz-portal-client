export const useTokenService = () => {
	const getAccessToken = () => localStorage.getItem('bgruz.authToken');
	const getRefreshToken = () => localStorage.getItem('bgruz.refreshToken');

	const setAccessToken = (token: string) => localStorage.setItem('bgruz.authToken', token);
	const setRefreshToken = (token: string) => localStorage.setItem('bgruz.refreshToken', token);

	const removeAccessToken = () => localStorage.removeItem('bgruz.authToken');
	const removeRefreshToken = () => localStorage.removeItem('bgruz.refreshToken');

	return {
		getAccessToken,
		getRefreshToken,
		setAccessToken,
		setRefreshToken,
		removeAccessToken,
		removeRefreshToken,
	};
};
