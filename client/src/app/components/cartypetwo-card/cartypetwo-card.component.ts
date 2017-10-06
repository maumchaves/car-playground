import { Component, Input } from '@angular/core';
import { Vehicle } from './../../models/vehicle';

@Component({
  selector: 'cartypetwo-card',
  templateUrl: './cartypetwo-card.component.html',
  styleUrls: ['./cartypetwo-card.component.css']
})
export class CarTypeTwoCard {

  @Input() vehicle: Vehicle;

}
