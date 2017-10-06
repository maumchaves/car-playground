import { Coordinate } from './coordinate';
import { Vehicle } from './vehicle';

export class CarTypeOne implements Vehicle {
  id: number;
  coordinate: Coordinate;
  vin: string;
  fuel: number;
  name: string;
  address: string;
  engineType: string;
  interior: string;
  exterior: string;
}
