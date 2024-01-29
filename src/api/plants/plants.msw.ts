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
import {
  CareType
} from '.././model'

export const getAPIGetAllMock = () => ({items: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({careType: faker.helpers.arrayElement(Object.values(CareType)), isSunLoving: faker.datatype.boolean(), maxSize: faker.number.int({min: undefined, max: undefined}), maxTemperature: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}),{}]), minSize: faker.number.int({min: undefined, max: undefined}), minTemperature: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}),{}]), name: faker.word.sample(), photo: faker.helpers.arrayElement([{originalName: faker.helpers.arrayElement([faker.word.sample(),{}]), urlPath: faker.word.sample()},{}]), uuid: faker.word.sample(), watering: faker.helpers.arrayElement(Object.values(CareType))})), page: faker.helpers.arrayElement([faker.number.int({min: 1, max: undefined}),{}]), pages: faker.helpers.arrayElement([faker.helpers.arrayElement([faker.number.int({min: 0, max: undefined}),{}]), undefined]), size: faker.helpers.arrayElement([faker.number.int({min: 1, max: undefined}),{}]), total: faker.helpers.arrayElement([faker.number.int({min: 0, max: undefined}),{}])})

export const getAPIGetMock = () => ({features: faker.word.sample(), generalInfo: faker.word.sample(), humidityPercentage: faker.number.int({min: undefined, max: undefined}), isSunLoving: faker.datatype.boolean(), maxSize: faker.number.int({min: undefined, max: undefined}), minSize: faker.number.int({min: undefined, max: undefined}), name: faker.word.sample(), photos: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({originalName: faker.helpers.arrayElement([faker.word.sample(),{}]), urlPath: faker.word.sample()})), temperatureInfo: faker.word.sample(), uuid: faker.word.sample(), wateringInfo: faker.word.sample(), waterVolume: faker.number.int({min: undefined, max: undefined})})

export const getPlantsMock = () => [
http.get('*/api/plants/', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPIGetAllMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/api/plants/:uuid', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPIGetMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),]
