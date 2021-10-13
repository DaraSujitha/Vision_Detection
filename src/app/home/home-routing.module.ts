import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PalletComponent } from './pallet/pallet.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { PalletboxComponent } from './palletbox/palletbox.component';
import { LoaderComponent } from '../loader/loader.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'loader', component: LoaderComponent },
            { path: 'pallet', component: PalletComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'success/:id', component: SuccessComponent },
            { path: 'error', component: ErrorComponent },
            { path: 'palletbox', component: PalletboxComponent },
            { path: 'loader', component: LoaderComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }