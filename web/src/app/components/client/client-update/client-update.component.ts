import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit{

  client!: Client;

  constructor(private clientService: ClientService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getById(id).subscribe((client) => {
    this.client = client;
    })
   
   }

   updateClient(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage("Morador atualizado com sucesso!");
      this.router.navigate(["/client"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/client"]);
  }

}
