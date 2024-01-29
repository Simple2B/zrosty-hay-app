/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.8
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

export const getUsersMock = () => [
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
      }),]
