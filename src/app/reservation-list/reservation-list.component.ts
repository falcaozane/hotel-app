import { Reservation } from './../models/reservation';
import { ReservationService } from './../reservation/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id);
  }
}
