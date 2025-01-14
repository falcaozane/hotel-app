import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup =  new FormGroup({});

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required,Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.reservationForm.valid){
      console.log(this.reservationForm.value);
      console.log("valid");
    }
  }


}
