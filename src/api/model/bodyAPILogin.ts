/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.11
 */
import type { BodyAPILoginClientId } from './bodyAPILoginClientId';
import type { BodyAPILoginClientSecret } from './bodyAPILoginClientSecret';
import type { BodyAPILoginGrantType } from './bodyAPILoginGrantType';

export interface BodyAPILogin {
  client_id?: BodyAPILoginClientId;
  client_secret?: BodyAPILoginClientSecret;
  grant_type?: BodyAPILoginGrantType;
  password: string;
  scope?: string;
  username: string;
}
