import { Component } from '@angular/core';
import { ReservationComponent } from '../reservation/reservation.component';
import { AdherantComponent } from '../adherant/adherant.component';
import { TerrainComponent } from '../terrain/terrain.component';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { ApiService, Reservation, Adherant, Terrain } from '../api.service';

@Component({
  selector: 'app-add-res',
  templateUrl: './add-res.component.html',
  styleUrl: './add-res.component.css'
})
export class AddResComponent {
  newReservation: any = {
    date_res:'',
    heure_debut: 0,
    heure_fin: 0,
    user: {} as AdherantComponent,
    ter: {} as TerrainComponent,
  };
  adherants: any = [];
  terrains: any = [];

  constructor(private apiService: ApiServiceService ,private act:ActivatedRoute ,private route:Router) {
    this.loadAdherants();
    this.loadTerrains();
  }

  loadAdherants(): void {
    this.apiService.getAllAdherants().subscribe((data) => {
      this.adherants = data;
    });
  }

  loadTerrains(): void {
    this.apiService.getAllTerrains().subscribe((data) => {
      this.terrains = data;
    });
  }

  addReservation(): void {
    this.apiService.addReservation(this.newReservation).subscribe(

      {
        "next" : data=>{ this.route.navigateByUrl("/reservation")},
        "error" : err => {},
        "complete":()=>{}
      }
    )
    
  }

}
