import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit{

  client: Client = {
    name: 'Miguel Elias Salomão Neto',
    email: 'miguel.elias@gmail.com',
    phone: '61 986011658',
    parking: '7979',
    apartment: '309',
    block: 'A',
  }

  constructor(private clientService: ClientService,
    private router: Router) { }
  ngOnInit(): void {
  }
  createClient(): void {
    this.clientService.create(this.client).subscribe(() => {
       this.clientService.showMessage('Cliente inserido com sucesso!')
       this.router.navigate(['/client'])
    })
  }
  cancel(): void{
    this.router.navigate(['/client'])
  }
}
