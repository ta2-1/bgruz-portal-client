import { $axios } from './axios';
import type { AxiosRequestConfig } from 'axios';
import axios, { type AxiosProgressEvent } from 'axios';

export interface NamedBlob {
	name: string;
	blob: Blob;
}

export interface HttpRequestOptions {
	getAbortFunc?: (abort: () => void) => void;
}

export interface UploadFileHttpRequestOptions extends HttpRequestOptions {
	onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
	timeout?: number;
}

export type Method = 'get' | 'delete' | 'post' | 'put' | 'patch';

export interface RequestOptions extends GetUriOptions {
	method: Method;
	requestBody?: any;
	getAbortFunc?: (abort: () => void) => void;
	onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
	timeout?: number;
}

export interface GetUriOptions {
	url: string;
	queryStringParams?: { [key: string]: any };
}

export class BaseApiService {
	resource: string;

	constructor(resource: string) {
		this.resource = resource;
	}

	async request<TResponse>(request: RequestOptions): Promise<TResponse> {
		const options: AxiosRequestConfig = {
			url: this.resource + '/' + request.url,
			method: request.method,
			params: request.queryStringParams,
			data: request.requestBody,
			onUploadProgress: request.onUploadProgress,
			timeout: request.timeout,
		};
		if (typeof request.getAbortFunc == 'function') {
			options.cancelToken = new axios.CancelToken(request.getAbortFunc);
		}
		const response = await $axios.request<TResponse>(options);
		return response.data;
	}
}
