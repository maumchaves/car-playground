import { Coordinate } from './coordinate';
import { Vehicle } from './vehicle';

export class CarTypeTwo implements Vehicle {
  id: number;
  coordinate: Coordinate;
  state: string;
  type: string;
}
