import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  response: any = { 'token': "" }

  constructor(private gest: ApiServiceService, private route: Router) { }


  login(request: any) {
    this.gest.connexion(request).subscribe({


      next: data => {
        console.log(data.body)
        let body: any = data.body;
        this.response.token = body.token;
        localStorage.setItem("token", body.token)
        this.gest.saveToken(this.response.token);
        this.route.navigateByUrl("/reservation");
      }
    })

  }

}
