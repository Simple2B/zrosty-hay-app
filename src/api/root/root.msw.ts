/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.9
 */
import {
  HttpResponse,
  delay,
  http
} from 'msw'

export const getRootMock = () => [
http.get('*/', async () => {
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
