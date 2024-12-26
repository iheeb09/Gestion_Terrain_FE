import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-adherant',
  templateUrl: './add-adherant.component.html',
  styleUrl: './add-adherant.component.css'
})
export class AddAdherantComponent {
  newAdherant = { nom: '', email: '' };
  adherants: any[] = [];

  constructor(private apiService: ApiServiceService ,private act:ActivatedRoute ,private route:Router) {}

  addAdherant(): void {
    this.apiService.addAdherant(this.newAdherant).subscribe(

      {
        "next" : data=>{ this.route.navigateByUrl("/adherant")},
        "error" : err => {},
        "complete":()=>{}
      }
    )
  }

}
