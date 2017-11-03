import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Vehicle } from './../models/vehicle';

@Injectable()
export class VehicleService {

  protected apiUrl: string;

  constructor(private http: Http) { }

  protected extractData(response: any): Vehicle[] { return response.json() as Vehicle[] };

  getVehicles(): Promise<Vehicle[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
