import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Gr8t App :D ';
}

export interface Car {
  Brand: string;
  Model: string;
  Color: string;
  NbOfDoors: number;
}

export class Garage {
  private cars: Array<Car> = [];

  constructor() {

  }

  AddCar(carToAdd: Car): void {
    this.cars.push(car);
  }

  ShowAllCars() {
    for (const aCar of this.cars) {
      console.log(car);
    }
  }
}

const car: Car = { Brand: 'Renault', Model: 'Twingo', Color: 'Rouge', NbOfDoors: 3 };
const garage: Garage = new Garage();
garage.AddCar(car);
garage.AddCar({ Brand: 'Fiat', Model: 'Panda', Color: 'Verte', NbOfDoors: 3 });
garage.ShowAllCars();
