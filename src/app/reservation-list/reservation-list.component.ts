import { Component, OnInit } from '@angular/core';
import { Resrvation } from '../model/resrvation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
 
  reservation: Resrvation[] = [];

  constructor(private resrvationService: ReservationService){}

  ngOnInit(): void {
    this.reservation = this.resrvationService.getReservations();
  }

  deleteReservation(id:string)
  {
    this.resrvationService.deleteReservation(id);
  }

}
