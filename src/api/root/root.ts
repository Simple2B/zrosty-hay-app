/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.9
 */
import {
  useInfiniteQuery,
  useQuery
} from '@tanstack/react-query'
import type {
  InfiniteData,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'



/**
 * @summary Root
 */
export const rootRoot = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    
    return axios.get(
      `https://api.zrosty-hay.simple2b.net/`,options
    );
  }


export const getRootRootQueryKey = () => {
    return [`https://api.zrosty-hay.simple2b.net/`] as const;
    }

    
export const getRootRootInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof rootRoot>>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof rootRoot>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getRootRootQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof rootRoot>>> = ({ signal }) => rootRoot({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof rootRoot>>, TError, TData> & { queryKey: QueryKey }
}

export type RootRootInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof rootRoot>>>
export type RootRootInfiniteQueryError = AxiosError<unknown>

/**
 * @summary Root
 */
export const useRootRootInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof rootRoot>>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof rootRoot>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getRootRootInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getRootRootQueryOptions = <TData = Awaited<ReturnType<typeof rootRoot>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof rootRoot>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getRootRootQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof rootRoot>>> = ({ signal }) => rootRoot({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof rootRoot>>, TError, TData> & { queryKey: QueryKey }
}

export type RootRootQueryResult = NonNullable<Awaited<ReturnType<typeof rootRoot>>>
export type RootRootQueryError = AxiosError<unknown>

/**
 * @summary Root
 */
export const useRootRoot = <TData = Awaited<ReturnType<typeof rootRoot>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof rootRoot>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getRootRootQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



