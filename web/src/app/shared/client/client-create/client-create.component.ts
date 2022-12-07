import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit{
  constructor(private clientService: ClientService,
    private router: Router) { }
  ngOnInit(): void {
  }
  createClient(): void {
    this.clientService.showMessage('Cliente criado com sucesso!')

  }
  cancel(): void{
    this.router.navigate(['/client'])
  }
}
