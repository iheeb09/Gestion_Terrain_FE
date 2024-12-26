import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  

  username: any = "";
  token: any = "";
    private baseUrl = 'http://localhost:8085/api';
  
    constructor(private http: HttpClient) {}
    connexion(request: any) {
      return this.http.post("http://127.0.0.1:8085/auth/login", request, { observe: 'response' });
    }

    saveToken(token: any) {
      let hp = new JwtHelperService();
      this.username = hp.decodeToken(token).sub;
      this.token = token;
  
    }
    logout() { this.username = ""; this.token = ""; localStorage.removeItem("token"); }
  
    // === Terrain ===
    getAllTerrains(){
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.get(`http://localhost:8085/api/terrains`,{headers:headers});
    }
  
    addTerrain(terrain: any){
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.post(`${this.baseUrl}/terrains`, terrain,{headers:headers});
    }
  
    deleteTerrain(id: number){
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.delete(`${this.baseUrl}/terrains/${id}`,{headers:headers});
    }
  
    // === Adherant ===
    getAllAdherants() {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.get(`${this.baseUrl}/adherants`,{headers:headers});
    }
  
    addAdherant(adherant: any) {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      
      return this.http.post(`${this.baseUrl}/adherants`, adherant,{headers:headers});
    }
  
    deleteAdherant(id: number){
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.delete(`http://localhost:8085/api/adherants/${id}`,{headers:headers});
    }
  
    // === Reservation ===
    getAllReservations() {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.get(`${this.baseUrl}/reservations`,{headers:headers});
    }
  
    addReservation(reservation: any) {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.post(
        `${this.baseUrl}/reservations`,
        reservation,{headers:headers}
      );
    }
  
    deleteReservation(id: number) {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.delete(`${this.baseUrl}/reservations/${id}`,{headers:headers});
    }
}
