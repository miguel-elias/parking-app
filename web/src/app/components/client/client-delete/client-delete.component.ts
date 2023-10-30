import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent {
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

   deleteClient(): void {
      this.clientService.delete(this.client.id).subscribe(() => {
      this.clientService.showMessage("Exclusão com sucesso!");
      this.router.navigate(["/client"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/client"]);
  }
}
