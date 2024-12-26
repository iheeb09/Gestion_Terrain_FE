import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  reservations: any=[];

  constructor(private apiService: ApiServiceService ,private act:ActivatedRoute ,private route:Router) {
    this.getReservations(); 
  }

  getReservations(): void {
    this.apiService.getAllReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

  deleteReservation(id: number): void {
    this.apiService.deleteReservation(id).subscribe(
      { 
        "next":  data =>{ this.route.navigateByUrl('/')},
        "error" : err=>{},
        "complete" : ()=>{}
  
  
      }
  
  
    )
  }

}
