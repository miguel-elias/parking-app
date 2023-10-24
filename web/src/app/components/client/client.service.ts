import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client.model';
import { ResponsePageable } from 'src/app/shared/model/responsePageable.model';
import { map, catchError } from "rxjs/operators";
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
  
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  create(client: Client): Observable<Client> {
    return this.HttpClient.post<Client>(this.baseUrl, client).pipe(
      map((obj)=> obj),
      catchError((e)=> this.errorHandler(e))
    );
  }

  getClient(): Observable<ResponsePageable> {
    return this.HttpClient.get<ResponsePageable>(this.baseUrl).pipe(
      map((obj)=> obj),
      catchError((e)=> this.errorHandler(e))
    );
  }

  getById(id: any): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.HttpClient.get<Client>(url).pipe(
      map((obj)=> obj),
      catchError((e)=> this.errorHandler(e))
    );
  }

  update(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/${client.id}`;
    return this.HttpClient.put<Client>(url, client).pipe(
      map((obj) => obj),
      catchError((e)=> this.errorHandler(e))
    );
  }

  delete(id: any): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.HttpClient.delete<Client>(url).pipe(
      map((obj) => obj),
      catchError((e)=> this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}