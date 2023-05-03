import { Injectable } from '@nestjs/common';
import { ICars } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: ICars[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    return this.cars.find((car) => car.id === id);
  }
}
