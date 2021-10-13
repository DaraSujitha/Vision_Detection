import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PalletComponent } from './pallet/pallet.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { PalletboxComponent } from './palletbox/palletbox.component';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PalletComponent,
    SuccessComponent,
    ErrorComponent,
    PalletboxComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]

})
export class HomeModule { }
