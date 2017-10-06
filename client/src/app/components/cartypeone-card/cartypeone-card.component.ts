import { Component, Input } from '@angular/core';
import { Vehicle } from './../../models/vehicle';

@Component({
  selector: 'cartypeone-card',
  templateUrl: './cartypeone-card.component.html',
  styleUrls: ['./cartypeone-card.component.css']
})
export class CarTypeOneCard {

  @Input() vehicle: Vehicle;

}
