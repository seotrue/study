import { useMutation, UseMutationResult, useQuery } from '@tanstack/react-query';
import { useFetch } from './useFetch.ts';
import { isUndefined } from 'lodash';
import { IQueryBody } from '../types/service.ts';

type QueryOption<T> = {
	url: string | ((params: any) => string);
	queryKey: string[];
	mapResponseData?: (data: any) => T;
	enabled?: boolean;
};
export function createQuery<T>(option: QueryOption<T>) {
	const { callQueryFetchData } = useFetch();
	const { queryKey, mapResponseData, enabled = true } = option;
	return (params?: any) => {
		const url = typeof option.url === 'function' ? option.url(params) : option.url;
		return useQuery<T, Error>({
			queryKey: [queryKey],
			queryFn: () => callQueryFetchData({ url, method: 'get' }),
			select: (data) => {
				return mapResponseData ? mapResponseData(data) : data;
			},
			enabled
		});
	};
}

type MutationOptions<T, U = any, B = any> = {
	url: string | ((params: any) => string);
	method: 'post' | 'put' | 'delete' | 'patch';
	onSuccess?: (data: T) => void;
};

type MutationVariables<U = any, B = any> = {
	urlParams: U;
	params?: B;
};

export function createMutation<T, U = any, B = any>(options: MutationOptions<T, U, B>) {
	return (): UseMutationResult<T, Error, MutationVariables<U, B>> => {
		const { callQueryFetchData } = useFetch();
		return useMutation({
			mutationFn: ({ params, urlParams }) => {
				console.log(urlParams, 'urlParams');
				console.log(typeof options.url, 'options');
				console.log(options.url, 'options.url');
				const url = typeof options.url === 'function' ? options.url(urlParams) : options.url;
				console.log(url, 'url');
				const body: IQueryBody = {
					url,
					method: options.method
				};
				if (!isUndefined(params)) {
					body.params = params;
				}
				return callQueryFetchData(body);
			},
			onSuccess: (data) => {
				if (options.onSuccess) {
					options.onSuccess(data);
				}
			}
		});
	};
}
