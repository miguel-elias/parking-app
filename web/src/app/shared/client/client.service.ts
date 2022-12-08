import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:8080/client"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client)
  }
}
