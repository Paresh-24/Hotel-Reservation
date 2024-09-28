import { Injectable } from '@angular/core';
import { Resrvation } from '../model/resrvation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservation: Resrvation[] = [];

  constructor(){
    let savedReservation = localStorage.getItem("reservations");
    this.reservation = savedReservation? JSON.parse(savedReservation): [];
  }

  //CRUD

  getReservations(): Resrvation[]{
    return this.reservation;
  }
  
  getReservation(id: string): Resrvation | undefined{
    return this.reservation.find(res => res.id === id)
  }

  addReservation(reservation: Resrvation): void {
    reservation.id = Math.random().toString();
    this.reservation.push(reservation);
    localStorage.setItem("reservations",JSON.stringify(this.reservation))
    
  }

  deleteReservation(id: string): void {
    let index = this.reservation.findIndex(res => res.id === id);
    this.reservation.splice(index,1);
    localStorage.setItem("reservations",JSON.stringify(this.reservation))
  }

  updateReservation(id: string,updateReservation: Resrvation): void {
    let index = this.reservation.findIndex(res => res.id === id);
    this.reservation[index] = updateReservation;
    localStorage.setItem("reservations",JSON.stringify(this.reservation))
  }
  
}
