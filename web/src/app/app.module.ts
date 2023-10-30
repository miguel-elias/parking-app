import { NgModule, Injectable, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ParkingComponent } from './views/parking/parking.component';
import { ClientComponent } from './views/client/client.component';
import { NavDirective } from './directives/nav.directive';
import { ParkingCreateComponent } from './components/parking/parking-create/parking-create.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ParkingDeleteComponent } from './components/parking/parking-delete/parking-delete.component';
import { ParkingReadComponent } from './components/parking/parking-read/parking-read.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    ParkingComponent,
    ClientComponent,
    NavDirective,
    ParkingCreateComponent,
    ClientCreateComponent,
    ParkingDeleteComponent,
    ParkingReadComponent,
    ClientReadComponent,
    ClientUpdateComponent,
    ClientDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
