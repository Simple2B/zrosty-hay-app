/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.11
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  PagePlant,
  Photo,
  PlantCategory,
  PlantDetail,
  Token,
  User
} from '.././model'

export const getAPIGetCurrentUserProfileMock = (overrideResponse: any = {}): User => ({activated: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), email: faker.word.sample(), id: faker.number.int({min: undefined, max: undefined}), username: faker.word.sample(), ...overrideResponse})

export const getAPILoginMock = (overrideResponse: any = {}): Token => ({access_token: faker.word.sample(), token_type: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})

export const getAPIGetTokenMock = (overrideResponse: any = {}): Token => ({access_token: faker.word.sample(), token_type: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})

export const getAPIGetAllMock = (overrideResponse: any = {}): PagePlant => ({items: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({careType: faker.helpers.arrayElement(Object.values(CareType)), isSunLoving: faker.datatype.boolean(), maxSize: faker.number.int({min: undefined, max: undefined}), maxTemperature: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}),{}]), minSize: faker.number.int({min: undefined, max: undefined}), minTemperature: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}),{}]), name: faker.word.sample(), photo: faker.helpers.arrayElement([{originalName: faker.helpers.arrayElement([faker.word.sample(),{}]), urlPath: faker.word.sample(), ...overrideResponse},{}]), uuid: faker.word.sample(), watering: faker.helpers.arrayElement(Object.values(CareType)), ...overrideResponse})), page: faker.helpers.arrayElement([faker.number.int({min: 1, max: undefined}),{}]), pages: faker.helpers.arrayElement([faker.helpers.arrayElement([faker.number.int({min: 0, max: undefined}),{}]), undefined]), size: faker.helpers.arrayElement([faker.number.int({min: 1, max: undefined}),{}]), total: faker.helpers.arrayElement([faker.number.int({min: 0, max: undefined}),{}]), ...overrideResponse})

export const getAPIGetCategoriesMock = (overrideResponse: any = {}): PlantCategory[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({name: faker.word.sample(), svgIcon: faker.word.sample(), uuid: faker.word.sample(), ...overrideResponse})))

export const getAPIGetMock = (overrideResponse: any = {}): PlantDetail => ({features: faker.word.sample(), generalInfo: faker.word.sample(), humidityPercentage: faker.number.int({min: undefined, max: undefined}), isSunLoving: faker.datatype.boolean(), maxSize: faker.number.int({min: undefined, max: undefined}), minSize: faker.number.int({min: undefined, max: undefined}), name: faker.word.sample(), temperatureInfo: faker.word.sample(), uuid: faker.word.sample(), wateringInfo: faker.word.sample(), waterVolume: faker.number.int({min: undefined, max: undefined}), ...overrideResponse})

export const getAPIGetPlantPhotosMock = (overrideResponse: any = {}): Photo[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({originalName: faker.helpers.arrayElement([faker.word.sample(),{}]), urlPath: faker.word.sample(), ...overrideResponse})))


export const getAPIGetCurrentUserProfileMockHandler = (overrideResponse?: User) => {
  return http.get('*/api/users/me', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getAPIGetCurrentUserProfileMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPILoginMockHandler = (overrideResponse?: Token) => {
  return http.post('*/api/auth/login', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getAPILoginMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIGetTokenMockHandler = (overrideResponse?: Token) => {
  return http.post('*/api/auth/token', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getAPIGetTokenMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIGetAllMockHandler = (overrideResponse?: PagePlant) => {
  return http.get('*/api/plants/', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getAPIGetAllMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIGetCategoriesMockHandler = (overrideResponse?: PlantCategory[]) => {
  return http.get('*/api/plants/categories', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getAPIGetCategoriesMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIGetMockHandler = (overrideResponse?: PlantDetail) => {
  return http.get('*/api/plants/:uuid', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getAPIGetMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIGetPlantPhotosMockHandler = (overrideResponse?: Photo[]) => {
  return http.get('*/api/plants/:uuid/photos', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getAPIGetPlantPhotosMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIListEndpointsMockHandler = () => {
  return http.get('*/api/list-endpoints/', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getApiMock = () => [
  getAPIGetCurrentUserProfileMockHandler(),
  getAPILoginMockHandler(),
  getAPIGetTokenMockHandler(),
  getAPIGetAllMockHandler(),
  getAPIGetCategoriesMockHandler(),
  getAPIGetMockHandler(),
  getAPIGetPlantPhotosMockHandler(),
  getAPIListEndpointsMockHandler()
]
