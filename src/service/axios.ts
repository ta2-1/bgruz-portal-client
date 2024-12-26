import axios, { type InternalAxiosRequestConfig } from 'axios';
import { useTokenService } from '@/composable/use-token-service';
import router from '@/router';

export const API_URL = import.meta.env.VITE_API_URL;
const tokenService = useTokenService();

export function requestInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
	const token = tokenService.getAccessToken();

	if (!config.headers.Authorization && token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
}

const $axios = axios.create({ baseURL: API_URL, timeout: 60000 });

console.log(API_URL);

$axios.interceptors.request.use(
	(config) => requestInterceptor(config),
	(error) => {
		return Promise.reject(error);
	},
);

const pushToLogin = async () => {
	await router.push({ name: 'Login' });
};

$axios.interceptors.response.use(null, async (error) => {
	if (!error.response) {
		return Promise.reject(error);
	}

	// Access Token was expired
  // ENABLE REDIRECT IF NOT AUTH
	// if (error.response.status === 401) {
  // 	tokenService.removeAccessToken();
  // 	tokenService.removeRefreshToken();
  // 	await pushToLogin();
  // 	return Promise.reject(error);
  // }

	return Promise.reject(error);
});

export { $axios };
