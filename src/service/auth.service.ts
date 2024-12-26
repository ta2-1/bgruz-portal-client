import { BaseApiService } from './api';

interface Token {
	access_token: string;
}

export interface AuthLoginDto {
	login: string;
	password: string;
}

class AuthService extends BaseApiService {
	login(dto: AuthLoginDto) {
		return this.request<Token>({ url: 'login', method: 'post', requestBody: dto });
	}
}

export default new AuthService(`${import.meta.env.VITE_API_URL}/api`);
