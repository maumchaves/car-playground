import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehicleCard } from './components/vehicle-card/vehicle-card.component';
import { CarTypeOneCard } from './components/cartypeone-card/cartypeone-card.component';
import { CarTypeTwoCard } from './components/cartypetwo-card/cartypetwo-card.component';
import { VehiclesMap } from './components/vehicles-map/vehicles-map.component';

import { VehicleService } from './services/vehicle.service';
import { CarTypeOneService } from './services/cartypeone.service';
import { CarTypeTwoService } from './services/cartypetwo.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      // apiKey: 'YOUR_KEY'
    })
  ],
  entryComponents: [
    CarTypeOneCard,
    CarTypeTwoCard
  ],
  declarations: [
    AppComponent,
    VehiclesListComponent,
    VehicleCard,
    CarTypeOneCard,
    CarTypeTwoCard,
    VehiclesMap
  ],
  providers: [VehicleService, CarTypeOneService, CarTypeTwoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
