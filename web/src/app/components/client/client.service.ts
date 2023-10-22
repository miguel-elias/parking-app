import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client.model';
import { ResponsePageable } from 'src/app/shared/model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:8080/client-parking"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private HttpClient: HttpClient, private snackBar: MatSnackBar) { }
  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(client: Client): Observable<Client> {
    return this.HttpClient.post<Client>(this.baseUrl, client)
  }

  getClient(): Observable<ResponsePageable> {
    return this.HttpClient.get<ResponsePageable>(this.baseUrl)
  }
}