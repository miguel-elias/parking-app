import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToParkingCreate(): void {
    this.router.navigate(['/parking/create'])
  }
}
