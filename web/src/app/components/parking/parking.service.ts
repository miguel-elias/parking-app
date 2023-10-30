import { Parking } from './parking.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  baseUrl = "http://localhost:8080/parking-spot"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg,"", {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  create(parking: Parking): Observable<Parking> {
    return this.http.post<Parking>(this.baseUrl, parking)
  }

   read(): Observable <Parking[]> {
    return this.http.get<Parking[]>(this.baseUrl)
   }

}
