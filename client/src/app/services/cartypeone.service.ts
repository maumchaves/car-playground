import { Injectable } from '@angular/core';
import { Coordinate } from './../models/coordinate';
import { Vehicle } from './../models/vehicle';
import { CarTypeOne } from './../models/cartypeone';

import { VehicleService } from './../services/vehicle.service';

@Injectable()
export class CarTypeOneService extends VehicleService {

  protected apiUrl: string = 'http://localhost:5000/api/car-type-one';

  protected extractData(response): Vehicle[] {
    let mapping = response.json().placemarks.map(function(carTypeOne) {
      let coordinate: Coordinate = {
        latitude: carTypeOne.coordinates[1],
        longitude: carTypeOne.coordinates[0],
        altitude: carTypeOne.coordinates[2]
      }
      delete carTypeOne.coordinates;
      carTypeOne.coordinate = coordinate;
      return carTypeOne;
    });
    
    return mapping as CarTypeOne[]
  };
}
