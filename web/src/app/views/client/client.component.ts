import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  navigateToClientCreate(): void {
    this.router.navigate(['/client/create'])
  }

}
