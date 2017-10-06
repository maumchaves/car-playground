import { Component, Input, ViewChild, ViewContainerRef, OnInit,
         ComponentFactoryResolver, SimpleChanges, ComponentRef } from '@angular/core';

import { Vehicle } from './../../models/vehicle';
import { CarTypeOneCard } from './../../components/cartypeone-card/cartypeone-card.component';
import { CarTypeTwoCard } from './../../components/cartypetwo-card/cartypetwo-card.component';

const componentsMapping = {
  cartypeone: CarTypeOneCard,
  cartypetwo: CarTypeTwoCard
}

@Component({
  selector: 'vehicle-card',
  templateUrl: './vehicle-card.component.html'
})
export class VehicleCard implements OnInit {

  @ViewChild('customVehicleCard', {read: ViewContainerRef}) customVehicleCard;

  constructor(private resolver: ComponentFactoryResolver) {}

  private isViewInitialized:boolean = false;
  @Input() source: string;
  @Input() vehicle: Vehicle;
  vehicleCardComponent: ComponentRef<any>;

  ngOnInit() {
    const vehicleCardFactory = this.resolver.resolveComponentFactory(componentsMapping[this.source])
    this.vehicleCardComponent = this.customVehicleCard.createComponent(vehicleCardFactory);
    this.vehicleCardComponent.instance.vehicle = this.vehicle;
  }
}