import { Injectable } from '@angular/core';
import { Resrvation } from '../model/resrvation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3001";

  private reservation: Resrvation[] = [];

  constructor(private http: HttpClient){}


  //CRUD

  getReservations(): Observable<Resrvation[]>{
    return this.http.get<Resrvation[]>(this.apiUrl + "/reservations");
  }
  
  getReservation(id: string): Observable<Resrvation[]>{
    return this.http.get<Resrvation[]>(this.apiUrl + "/reservation/"+id);
  }

  addReservation(reservation: Resrvation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation",reservation);   
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/"+id);
  }

  updateReservation(id: string,updateReservation: Resrvation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/"+id,updateReservation);
  }
  
}
