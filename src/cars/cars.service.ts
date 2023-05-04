import { Injectable } from '@nestjs/common';
import { ICars } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';

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

  createCar(createCarDto: CreateCarDto) {
    const newCar = { id: uuid(), ...createCarDto };
    this.cars.push(newCar);

    return newCar;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...carDb, ...updateCarDto, id };
        return carDb;
      }
      return car;
    });
    return carDb;
  }
}
