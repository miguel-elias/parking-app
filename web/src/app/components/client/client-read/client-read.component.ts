import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients!: Client[];
  displayedColumns = ['id', 'name', 'email', 'action']

  constructor(private clientService: ClientService, private router: Router) { }

 
  ngOnInit(): void {
   this.getClient();
  
  }

  getClient(){
    this.clientService.getClient().subscribe(data => {
        this.clients = data.content;
        console.log("trazendo aqui", this.clients);
      }
    );
  }

  navigateToClientCreate(): void {
    this.router.navigate(['/client/create'])
  }
}