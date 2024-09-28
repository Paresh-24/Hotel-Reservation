import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Resrvation } from '../model/resrvation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup =new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['',Validators.required],
      checkOutDate: ['',Validators.required],
      guestName: ['',Validators.required],
      guestEmail: ['',[Validators.required,Validators.email]],
      roomNumber: ['',Validators.required]

    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let resrvation = this.reservationService.getReservation(id);

      if(resrvation)
      this.reservationForm.patchValue(resrvation);

    }
    
  }

  onSubmit(){
    if(this.reservationForm.valid)
    {
      
      let reservation: Resrvation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if(id){
        //Update
        this.reservationService.updateReservation(id,reservation);
      }
      else{
        //Create
        this.reservationService.addReservation(reservation);
      }
      
    }
    else{
      console.log("Please filled correctly");
      
    }

    this.router.navigate(['/list'])
  }

}
