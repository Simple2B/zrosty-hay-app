/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.8
 */
import type { PlantFamilyType } from './plantFamilyType';

export type APIGetAllParams = {
name?: string;
can_plant_indoors?: boolean | null;
type_of?: PlantFamilyType | null;
/**
 * Page number
 */
page?: number;
/**
 * Page size
 */
size?: number;
};
