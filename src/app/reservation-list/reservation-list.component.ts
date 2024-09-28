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
    this.resrvationService.getReservations().subscribe( reservartions => {
      this.reservation = reservartions;
    });
  }

  deleteReservation(id:string)
  {
    this.resrvationService.deleteReservation(id).subscribe(() =>{
      console.log("Delete request got processed.");
      
    });
  }

}
