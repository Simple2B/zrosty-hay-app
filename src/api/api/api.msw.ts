/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.6
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'

export const getAPIGetCurrentUserProfileMock = () => ({activated: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), email: faker.word.sample(), id: faker.number.int({min: undefined, max: undefined}), username: faker.word.sample()})

export const getAPILoginMock = () => ({access_token: faker.word.sample(), token_type: faker.helpers.arrayElement([faker.word.sample(), undefined])})

export const getAPIGetTokenMock = () => ({access_token: faker.word.sample(), token_type: faker.helpers.arrayElement([faker.word.sample(), undefined])})

export const getApiMock = () => [
http.get('*/api/users/me', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPIGetCurrentUserProfileMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/api/auth/login', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPILoginMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/api/auth/token', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPIGetTokenMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/api/list-endpoints/', async () => {
        await delay(1000);
        return new HttpResponse(null,
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),]