/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.9
 */
import { useQuery } from '@tanstack/react-query';
import type { QueryFunction, QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { APIGetAllParams } from '../model/aPIGetAllParams';
import type { ApiError404 } from '../model/apiError404';
import type { HTTPValidationError } from '../model/hTTPValidationError';
import type { PagePlant } from '../model/pagePlant';
import type { PlantCategory } from '../model/plantCategory';
import type { PlantDetail } from '../model/plantDetail';

/**
 * Returns the plants
 * @summary Get All
 */
export const aPIGetAll = (
	params?: APIGetAllParams,
	options?: AxiosRequestConfig,
): Promise<AxiosResponse<PagePlant>> => {
	return axios.get(`https://api.zrosty-hay.simple2b.net/api/plants/`, {
		...options,
		params: { ...params, ...options?.params },
	});
};

export const getAPIGetAllQueryKey = (params?: APIGetAllParams) => {
	return [`https://api.zrosty-hay.simple2b.net/api/plants/`, ...(params ? [params] : [])] as const;
};

export const getAPIGetAllQueryOptions = <
	TData = Awaited<ReturnType<typeof aPIGetAll>>,
	TError = AxiosError<HTTPValidationError>,
>(
	params?: APIGetAllParams,
	options?: {
		query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData>>;
		axios?: AxiosRequestConfig;
	},
) => {
	const { query: queryOptions, axios: axiosOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getAPIGetAllQueryKey(params);

	const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetAll>>, QueryKey, APIGetAllParams['page']> = ({
		signal,
		pageParam,
	}) => aPIGetAll({ ...params, page: pageParam || params?.['page'] }, { signal, ...axiosOptions });

	return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
		Awaited<ReturnType<typeof aPIGetAll>>,
		TError,
		TData,
		Awaited<ReturnType<typeof aPIGetAll>>,
		QueryKey,
		APIGetAllParams['page']
	> & { queryKey: QueryKey };
};

export type APIGetAllInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetAll>>>;
export type APIGetAllInfiniteQueryError = AxiosError<HTTPValidationError>;

/**
 * @summary Get All
 */
export const useAPIGetAllInfinite = <
	TData = InfiniteData<Awaited<ReturnType<typeof aPIGetAll>>, APIGetAllParams['page']>,
	TError = AxiosError<HTTPValidationError>,
>(
	params?: APIGetAllParams,
	options?: {
		query?: Partial<
			UseInfiniteQueryOptions<
				Awaited<ReturnType<typeof aPIGetAll>>,
				TError,
				TData,
				Awaited<ReturnType<typeof aPIGetAll>>,
				QueryKey,
				APIGetAllParams['page']
			>
		>;
		axios?: AxiosRequestConfig;
	},
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = getAPIGetAllInfiniteQueryOptions(params, options);

	const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

	query.queryKey = queryOptions.queryKey;

	return query;
};

export const getAPIGetAllQueryOptions = <
	TData = Awaited<ReturnType<typeof aPIGetAll>>,
	TError = AxiosError<HTTPValidationError>,
>(
	params?: APIGetAllParams,
	options?: {
		query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData>>;
		axios?: AxiosRequestConfig;
	},
) => {
	const { query: queryOptions, axios: axiosOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getAPIGetAllQueryKey(params);

	const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetAll>>> = ({ signal }) =>
		aPIGetAll(params, { signal, ...axiosOptions });

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof aPIGetAll>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type APIGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetAll>>>;
export type APIGetAllQueryError = AxiosError<HTTPValidationError>;

/**
 * @summary Get All
 */
export const useAPIGetAll = <TData = Awaited<ReturnType<typeof aPIGetAll>>, TError = AxiosError<HTTPValidationError>>(
	params?: APIGetAllParams,
	options?: {
		query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData>>;
		axios?: AxiosRequestConfig;
	},
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = getAPIGetAllQueryOptions(params, options);

	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

	query.queryKey = queryOptions.queryKey;

	return query;
};

/**
 * Returns the plants
 * @summary Get Categories
 */
export const aPIGetCategories = (options?: AxiosRequestConfig): Promise<AxiosResponse<PlantCategory[]>> => {
	return axios.get(`https://api.zrosty-hay.simple2b.net/api/plants/categories`, options);
};

export const getAPIGetCategoriesQueryKey = () => {
	return [`https://api.zrosty-hay.simple2b.net/api/plants/categories`] as const;
};

export const getAPIGetCategoriesQueryOptions = <
	TData = Awaited<ReturnType<typeof aPIGetCategories>>,
	TError = AxiosError<unknown>,
>(options?: {
	query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData>>;
	axios?: AxiosRequestConfig;
}) => {
	const { query: queryOptions, axios: axiosOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getAPIGetCategoriesQueryKey();

	const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetCategories>>> = ({ signal }) =>
		aPIGetCategories({ signal, ...axiosOptions });

	return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
		Awaited<ReturnType<typeof aPIGetCategories>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type APIGetCategoriesInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetCategories>>>;
export type APIGetCategoriesInfiniteQueryError = AxiosError<unknown>;

/**
 * @summary Get Categories
 */
export const useAPIGetCategoriesInfinite = <
	TData = InfiniteData<Awaited<ReturnType<typeof aPIGetCategories>>>,
	TError = AxiosError<unknown>,
>(options?: {
	query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData>>;
	axios?: AxiosRequestConfig;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = getAPIGetCategoriesInfiniteQueryOptions(options);

	const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

	query.queryKey = queryOptions.queryKey;

	return query;
};

export const getAPIGetCategoriesQueryOptions = <
	TData = Awaited<ReturnType<typeof aPIGetCategories>>,
	TError = AxiosError<unknown>,
>(options?: {
	query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData>>;
	axios?: AxiosRequestConfig;
}) => {
	const { query: queryOptions, axios: axiosOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getAPIGetCategoriesQueryKey();

	const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetCategories>>> = ({ signal }) =>
		aPIGetCategories({ signal, ...axiosOptions });

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof aPIGetCategories>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type APIGetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetCategories>>>;
export type APIGetCategoriesQueryError = AxiosError<unknown>;

/**
 * @summary Get Categories
 */
export const useAPIGetCategories = <
	TData = Awaited<ReturnType<typeof aPIGetCategories>>,
	TError = AxiosError<unknown>,
>(options?: {
	query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData>>;
	axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = getAPIGetCategoriesQueryOptions(options);

	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

	query.queryKey = queryOptions.queryKey;

	return query;
};

/**
 * Returns the plants
 * @summary Get
 */
export const aPIGet = (uuid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PlantDetail>> => {
	return axios.get(`https://api.zrosty-hay.simple2b.net/api/plants/${uuid}`, options);
};

export const getAPIGetQueryKey = (uuid: string) => {
	return [`https://api.zrosty-hay.simple2b.net/api/plants/${uuid}`] as const;
};

export const getAPIGetQueryOptions = <
	TData = Awaited<ReturnType<typeof aPIGet>>,
	TError = AxiosError<ApiError404 | HTTPValidationError>,
>(
	uuid: string,
	options?: {
		query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData>>;
		axios?: AxiosRequestConfig;
	},
) => {
	const { query: queryOptions, axios: axiosOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getAPIGetQueryKey(uuid);

	const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGet>>> = ({ signal }) =>
		aPIGet(uuid, { signal, ...axiosOptions });

	return { queryKey, queryFn, enabled: !!uuid, ...queryOptions } as UseInfiniteQueryOptions<
		Awaited<ReturnType<typeof aPIGet>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type APIGetInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGet>>>;
export type APIGetInfiniteQueryError = AxiosError<ApiError404 | HTTPValidationError>;

/**
 * @summary Get
 */
export const useAPIGetInfinite = <
	TData = InfiniteData<Awaited<ReturnType<typeof aPIGet>>>,
	TError = AxiosError<ApiError404 | HTTPValidationError>,
>(
	uuid: string,
	options?: {
		query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData>>;
		axios?: AxiosRequestConfig;
	},
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = getAPIGetInfiniteQueryOptions(uuid, options);

	const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

	query.queryKey = queryOptions.queryKey;

	return query;
};

export const getAPIGetQueryOptions = <
	TData = Awaited<ReturnType<typeof aPIGet>>,
	TError = AxiosError<ApiError404 | HTTPValidationError>,
>(
	uuid: string,
	options?: {
		query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData>>;
		axios?: AxiosRequestConfig;
	},
) => {
	const { query: queryOptions, axios: axiosOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getAPIGetQueryKey(uuid);

	const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGet>>> = ({ signal }) =>
		aPIGet(uuid, { signal, ...axiosOptions });

	return { queryKey, queryFn, enabled: !!uuid, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof aPIGet>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type APIGetQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGet>>>;
export type APIGetQueryError = AxiosError<ApiError404 | HTTPValidationError>;

/**
 * @summary Get
 */
export const useAPIGet = <
	TData = Awaited<ReturnType<typeof aPIGet>>,
	TError = AxiosError<ApiError404 | HTTPValidationError>,
>(
	uuid: string,
	options?: {
		query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData>>;
		axios?: AxiosRequestConfig;
	},
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = getAPIGetQueryOptions(uuid, options);

	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

	query.queryKey = queryOptions.queryKey;

	return query;
};
