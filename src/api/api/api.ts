/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.9
 */
import {
  useInfiniteQuery,
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  APIGetAllParams
} from '../model/aPIGetAllParams'
import type {
  ApiError404
} from '../model/apiError404'
import type {
  Auth
} from '../model/auth'
import type {
  BodyAPILogin
} from '../model/bodyAPILogin'
import type {
  HTTPValidationError
} from '../model/hTTPValidationError'
import type {
  PagePlant
} from '../model/pagePlant'
import type {
  PlantCategory
} from '../model/plantCategory'
import type {
  PlantDetail
} from '../model/plantDetail'
import type {
  Token
} from '../model/token'
import type {
  User
} from '../model/user'



/**
 * Returns the current user profile
 * @summary Get Current User Profile
 */
export const aPIGetCurrentUserProfile = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<User>> => {
    
    return axios.get(
      `https://api.zrosty-hay.simple2b.net/api/users/me`,options
    );
  }


export const getAPIGetCurrentUserProfileQueryKey = () => {
    return [`https://api.zrosty-hay.simple2b.net/api/users/me`] as const;
    }

    
export const getAPIGetCurrentUserProfileInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIGetCurrentUserProfileQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>> = ({ signal }) => aPIGetCurrentUserProfile({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>, TError, TData> & { queryKey: QueryKey }
}

export type APIGetCurrentUserProfileInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>>
export type APIGetCurrentUserProfileInfiniteQueryError = AxiosError<unknown>

/**
 * @summary Get Current User Profile
 */
export const useAPIGetCurrentUserProfileInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIGetCurrentUserProfileInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getAPIGetCurrentUserProfileQueryOptions = <TData = Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIGetCurrentUserProfileQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>> = ({ signal }) => aPIGetCurrentUserProfile({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>, TError, TData> & { queryKey: QueryKey }
}

export type APIGetCurrentUserProfileQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>>
export type APIGetCurrentUserProfileQueryError = AxiosError<unknown>

/**
 * @summary Get Current User Profile
 */
export const useAPIGetCurrentUserProfile = <TData = Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetCurrentUserProfile>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIGetCurrentUserProfileQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Logs in a user
 * @summary Login
 */
export const aPILogin = (
    bodyAPILogin: BodyAPILogin, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Token>> => {const formUrlEncoded = new URLSearchParams();
if(bodyAPILogin.grant_type !== undefined) {
 formUrlEncoded.append('grant_type', bodyAPILogin.grant_type)
 }
formUrlEncoded.append('username', bodyAPILogin.username)
formUrlEncoded.append('password', bodyAPILogin.password)
if(bodyAPILogin.scope !== undefined) {
 formUrlEncoded.append('scope', bodyAPILogin.scope)
 }
if(bodyAPILogin.client_id !== undefined) {
 formUrlEncoded.append('client_id', bodyAPILogin.client_id)
 }
if(bodyAPILogin.client_secret !== undefined) {
 formUrlEncoded.append('client_secret', bodyAPILogin.client_secret)
 }

    
    return axios.post(
      `https://api.zrosty-hay.simple2b.net/api/auth/login`,
      formUrlEncoded,options
    );
  }



export const getAPILoginMutationOptions = <TError = AxiosError<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aPILogin>>, TError,{data: BodyAPILogin}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof aPILogin>>, TError,{data: BodyAPILogin}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof aPILogin>>, {data: BodyAPILogin}> = (props) => {
          const {data} = props ?? {};

          return  aPILogin(data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type APILoginMutationResult = NonNullable<Awaited<ReturnType<typeof aPILogin>>>
    export type APILoginMutationBody = BodyAPILogin
    export type APILoginMutationError = AxiosError<HTTPValidationError>

    /**
 * @summary Login
 */
export const useAPILogin = <TError = AxiosError<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aPILogin>>, TError,{data: BodyAPILogin}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getAPILoginMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Logs in a user
 * @summary Get Token
 */
export const aPIGetToken = (
    auth: Auth, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Token>> => {
    
    return axios.post(
      `https://api.zrosty-hay.simple2b.net/api/auth/token`,
      auth,options
    );
  }



export const getAPIGetTokenMutationOptions = <TError = AxiosError<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aPIGetToken>>, TError,{data: Auth}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof aPIGetToken>>, TError,{data: Auth}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof aPIGetToken>>, {data: Auth}> = (props) => {
          const {data} = props ?? {};

          return  aPIGetToken(data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type APIGetTokenMutationResult = NonNullable<Awaited<ReturnType<typeof aPIGetToken>>>
    export type APIGetTokenMutationBody = Auth
    export type APIGetTokenMutationError = AxiosError<HTTPValidationError>

    /**
 * @summary Get Token
 */
export const useAPIGetToken = <TError = AxiosError<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof aPIGetToken>>, TError,{data: Auth}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getAPIGetTokenMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Returns the plants
 * @summary Get All
 */
export const aPIGetAll = (
    params?: APIGetAllParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PagePlant>> => {
    
    return axios.get(
      `https://api.zrosty-hay.simple2b.net/api/plants/`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getAPIGetAllQueryKey = (params?: APIGetAllParams,) => {
    return [`https://api.zrosty-hay.simple2b.net/api/plants/`, ...(params ? [params]: [])] as const;
    }

    
export const getAPIGetAllInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof aPIGetAll>>, APIGetAllParams['page']>, TError = AxiosError<HTTPValidationError>>(params?: APIGetAllParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData, Awaited<ReturnType<typeof aPIGetAll>>, QueryKey, APIGetAllParams['page']>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetAll>>, QueryKey, APIGetAllParams['page']> = ({ signal, pageParam }) => aPIGetAll({...params, page: pageParam || params?.['page']}, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData, Awaited<ReturnType<typeof aPIGetAll>>, QueryKey, APIGetAllParams['page']> & { queryKey: QueryKey }
}

export type APIGetAllInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetAll>>>
export type APIGetAllInfiniteQueryError = AxiosError<HTTPValidationError>

/**
 * @summary Get All
 */
export const useAPIGetAllInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof aPIGetAll>>, APIGetAllParams['page']>, TError = AxiosError<HTTPValidationError>>(
 params?: APIGetAllParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData, Awaited<ReturnType<typeof aPIGetAll>>, QueryKey, APIGetAllParams['page']>>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIGetAllInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getAPIGetAllQueryOptions = <TData = Awaited<ReturnType<typeof aPIGetAll>>, TError = AxiosError<HTTPValidationError>>(params?: APIGetAllParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetAll>>> = ({ signal }) => aPIGetAll(params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type APIGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetAll>>>
export type APIGetAllQueryError = AxiosError<HTTPValidationError>

/**
 * @summary Get All
 */
export const useAPIGetAll = <TData = Awaited<ReturnType<typeof aPIGetAll>>, TError = AxiosError<HTTPValidationError>>(
 params?: APIGetAllParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetAll>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Returns the plants
 * @summary Get Categories
 */
export const aPIGetCategories = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PlantCategory[]>> => {
    
    return axios.get(
      `https://api.zrosty-hay.simple2b.net/api/plants/categories`,options
    );
  }


export const getAPIGetCategoriesQueryKey = () => {
    return [`https://api.zrosty-hay.simple2b.net/api/plants/categories`] as const;
    }

    
export const getAPIGetCategoriesInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof aPIGetCategories>>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIGetCategoriesQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetCategories>>> = ({ signal }) => aPIGetCategories({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData> & { queryKey: QueryKey }
}

export type APIGetCategoriesInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetCategories>>>
export type APIGetCategoriesInfiniteQueryError = AxiosError<unknown>

/**
 * @summary Get Categories
 */
export const useAPIGetCategoriesInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof aPIGetCategories>>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIGetCategoriesInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getAPIGetCategoriesQueryOptions = <TData = Awaited<ReturnType<typeof aPIGetCategories>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIGetCategoriesQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGetCategories>>> = ({ signal }) => aPIGetCategories({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData> & { queryKey: QueryKey }
}

export type APIGetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGetCategories>>>
export type APIGetCategoriesQueryError = AxiosError<unknown>

/**
 * @summary Get Categories
 */
export const useAPIGetCategories = <TData = Awaited<ReturnType<typeof aPIGetCategories>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGetCategories>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIGetCategoriesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Returns the plants
 * @summary Get
 */
export const aPIGet = (
    uuid: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PlantDetail>> => {
    
    return axios.get(
      `https://api.zrosty-hay.simple2b.net/api/plants/${uuid}`,options
    );
  }


export const getAPIGetQueryKey = (uuid: string,) => {
    return [`https://api.zrosty-hay.simple2b.net/api/plants/${uuid}`] as const;
    }

    
export const getAPIGetInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof aPIGet>>>, TError = AxiosError<ApiError404 | HTTPValidationError>>(uuid: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIGetQueryKey(uuid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGet>>> = ({ signal }) => aPIGet(uuid, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(uuid), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData> & { queryKey: QueryKey }
}

export type APIGetInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGet>>>
export type APIGetInfiniteQueryError = AxiosError<ApiError404 | HTTPValidationError>

/**
 * @summary Get
 */
export const useAPIGetInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof aPIGet>>>, TError = AxiosError<ApiError404 | HTTPValidationError>>(
 uuid: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIGetInfiniteQueryOptions(uuid,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getAPIGetQueryOptions = <TData = Awaited<ReturnType<typeof aPIGet>>, TError = AxiosError<ApiError404 | HTTPValidationError>>(uuid: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIGetQueryKey(uuid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIGet>>> = ({ signal }) => aPIGet(uuid, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(uuid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData> & { queryKey: QueryKey }
}

export type APIGetQueryResult = NonNullable<Awaited<ReturnType<typeof aPIGet>>>
export type APIGetQueryError = AxiosError<ApiError404 | HTTPValidationError>

/**
 * @summary Get
 */
export const useAPIGet = <TData = Awaited<ReturnType<typeof aPIGet>>, TError = AxiosError<ApiError404 | HTTPValidationError>>(
 uuid: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIGet>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIGetQueryOptions(uuid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary List Endpoints
 */
export const aPIListEndpoints = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    
    return axios.get(
      `https://api.zrosty-hay.simple2b.net/api/list-endpoints/`,options
    );
  }


export const getAPIListEndpointsQueryKey = () => {
    return [`https://api.zrosty-hay.simple2b.net/api/list-endpoints/`] as const;
    }

    
export const getAPIListEndpointsInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof aPIListEndpoints>>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIListEndpoints>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIListEndpointsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIListEndpoints>>> = ({ signal }) => aPIListEndpoints({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIListEndpoints>>, TError, TData> & { queryKey: QueryKey }
}

export type APIListEndpointsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof aPIListEndpoints>>>
export type APIListEndpointsInfiniteQueryError = AxiosError<unknown>

/**
 * @summary List Endpoints
 */
export const useAPIListEndpointsInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof aPIListEndpoints>>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof aPIListEndpoints>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIListEndpointsInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getAPIListEndpointsQueryOptions = <TData = Awaited<ReturnType<typeof aPIListEndpoints>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIListEndpoints>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIListEndpointsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIListEndpoints>>> = ({ signal }) => aPIListEndpoints({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof aPIListEndpoints>>, TError, TData> & { queryKey: QueryKey }
}

export type APIListEndpointsQueryResult = NonNullable<Awaited<ReturnType<typeof aPIListEndpoints>>>
export type APIListEndpointsQueryError = AxiosError<unknown>

/**
 * @summary List Endpoints
 */
export const useAPIListEndpoints = <TData = Awaited<ReturnType<typeof aPIListEndpoints>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIListEndpoints>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIListEndpointsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



