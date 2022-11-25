import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './views/client/client.component';
import { HomeComponent } from './views/home/home.component';
import { ParkingComponent } from './views/parking/parking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'parking',
    component: ParkingComponent
  },
  {
  path: 'client',
    component: ClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
