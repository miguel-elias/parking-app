import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../parking.service';
import { Parking } from '../parking.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-read',
  templateUrl: './parking-read.component.html',
  styleUrls: ['./parking-read.component.css']
})
export class ParkingReadComponent implements OnInit {

  parkings: Parking[]=[];

  constructor(private parkingService: ParkingService, private router: Router) {}

  ngOnInit(): void {
    this.parkingService.read().subscribe(parkings => {
      this.parkings = parkings
      console.log(parkings)
    })
  }

  navigateToParkingCreate(): void {
    this.router.navigate(['/parking/create'])
  }

}
