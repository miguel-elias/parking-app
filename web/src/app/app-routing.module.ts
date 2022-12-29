import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingCreateComponent } from './components/parking/parking-create/parking-create.component';
import { ClientComponent } from './views/client/client.component';
import { HomeComponent } from './views/home/home.component';
import { ParkingComponent } from './views/parking/parking.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
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
  {
    path: 'parking/create',
    component: ParkingCreateComponent
  },
  {
    path: 'client/create',
    component: ClientCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
