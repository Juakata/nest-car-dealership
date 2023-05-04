import { Injectable, NotFoundException } from '@nestjs/common';
import { Cars } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
  private cars: Cars[] = [];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id: ${id}, not found!`);
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

  deleteCar(id: string) {
    const carDb = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);

    return carDb;
  }

  fillCarsWithSeedData() {
    return 'Filling';
  }
}
