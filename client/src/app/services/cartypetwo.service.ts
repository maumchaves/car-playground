import { Injectable } from '@angular/core';
import { Vehicle } from './../models/vehicle';
import { CarTypeTwo } from './../models/cartypetwo';

import { VehicleService } from './../services/vehicle.service';

@Injectable()
export class CarTypeTwoService extends VehicleService {

  protected apiUrl: string = 'http://localhost:5000/api/car-type-two';

  protected extractData(response): Vehicle[] {
    return response.json().poiList as CarTypeTwo[]
  };
}
