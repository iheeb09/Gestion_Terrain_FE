import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adherant',
  templateUrl: './adherant.component.html',
  styleUrl: './adherant.component.css'
})
export class AdherantComponent {
  adherants: any[] = [];
  adh: any=[] ;
  newAdherant: any = { nom: '', email: '' };

  constructor(private apiService: ApiServiceService ,private act:ActivatedRoute ,private route:Router ) {
    this.getAllAdherants(); // Appel direct lors de la création
  }

  getAllAdherants(): void {
    this.apiService.getAllAdherants().subscribe({
      "next" : data=>{ this.adh=data},
      "error" : err => {},
      "complete":()=>{}
    });
  }

  addAdherant(): void {
    this.apiService.addAdherant(this.newAdherant).subscribe((data) => {
      this.adherants.push(data);
      this.newAdherant = { nom: '', email: '' };
    });
  }

  deleteAdherant(id: number): void {
    this.apiService.deleteAdherant(id).subscribe(
      { 
        "next":  data =>{ this.route.navigateByUrl('/adherant')},
        "error" : err=>{},
        "complete" : ()=>{}
  
  
      });
  }
 

}
