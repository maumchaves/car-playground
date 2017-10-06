import { Component, Input, OnInit } from '@angular/core';
import { Coordinate } from './../../models/coordinate';
import { Vehicle } from './../../models/vehicle';

@Component({
  selector: 'vehicles-map',
  templateUrl: './vehicles-map.component.html',
  styleUrls: ['./vehicles-map.component.css']
})
export class VehiclesMap {

  defaultZoom: number = 4;
  defaultCoordinate: Coordinate = {
    latitude: 48.1199585,
    longitude: 4.0949423,
    altitude: 0
  }
  zoom: number = 15;
  @Input() selectedVehicle: Vehicle;

}
