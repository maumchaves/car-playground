import { Component, EventEmitter, OnInit, Input, Output, Injector, SimpleChanges } from '@angular/core';
import { Vehicle } from './../../models/vehicle';
import { VehicleService } from './../../services/vehicle.service';
import { CarTypeOneService } from './../../services/cartypeone.service';
import { CarTypeTwoService } from './../../services/cartypetwo.service';

const servicesMapping = {
  cartypeone: CarTypeOneService,
  cartypetwo: CarTypeTwoService
}

@Component({
  selector: 'vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent {

  constructor(private injector: Injector) { }

  vehicles: Vehicle[];
  selectedVehicle: Vehicle;
  vehicleService: VehicleService;
  @Input() source: string;
  @Output() onVehicleSelected = new EventEmitter<Vehicle>();

  ngOnChanges(changes: SimpleChanges) {
    if(changes.source) {
      this.getVehicles();
    }
  }

  getVehicles(): void {
    this.vehicleService = this.injector.get(servicesMapping[this.source]);
    this.vehicleService.getVehicles().then(vehicles => this.vehicles = vehicles);
  }

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
    this.onVehicleSelected.emit(vehicle);
  }
}
