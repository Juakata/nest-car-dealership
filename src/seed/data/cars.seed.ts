import { Brand } from 'src/brands/entities/brand.entity';
import { Cars } from 'src/cars/interfaces/cars.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Cars[] = [
  { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
  { id: uuid(), brand: 'Honda', model: 'Civic' },
];
