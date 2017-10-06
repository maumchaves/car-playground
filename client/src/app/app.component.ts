import { Component } from '@angular/core';
import { Vehicle } from './models/vehicle';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Car Playground';
  author = 'Mau Muñoz';
  currentTab = 'cartypeone';
  selectedVehicle: Vehicle;

  onVehicleSelected(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
  }

  onSelectTab(tab: string): void {
    this.currentTab = tab;
  }
}
