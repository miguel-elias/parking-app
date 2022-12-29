import { Parking } from './../parking.model';
import { ParkingService } from '../parking.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-create',
  templateUrl: './parking-create.component.html',
  styleUrls: ['./parking-create.component.css']
})
export class ParkingCreateComponent implements OnInit{

  parking: Parking = {
    parkingSpotNumber: '',
    licensePlateCar: '',
    brandCar: '',
    modelCar: '',
    colorCar: '',
    /* dataTime: '', */
    responsibleName: '',
    apartment: '',
    block: '',
  }

  constructor(private parkingService: ParkingService,
     private router: Router) { }
  ngOnInit(): void {

  }
  createParking(): void {
    this.parkingService.create(this.parking).subscribe(() => {
       this.parkingService.showMessage('Vaga inserida com sucesso!')
       this.router.navigate(['/parking'])
    })
}
  cancel(): void{
    this.router.navigate(['/parking'])
}
}
