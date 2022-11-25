import { ParkingService } from '../parking.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-create',
  templateUrl: './parking-create.component.html',
  styleUrls: ['./parking-create.component.css']
})
export class ParkingCreateComponent implements OnInit{
  constructor(private parkingService: ParkingService,
     private router: Router) { }
  ngOnInit(): void {

  }
  createParking(): void{
    this.parkingService.showMessage('Vaga criada com sucesso!')
  }
  cancel(): void{
    this.router.navigate(['/parking'])
}
}
