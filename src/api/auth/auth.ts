/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.8
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions
} from '@tanstack/react-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
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
  Token
} from '../model/token'



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
    