import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrl: './terrain.component.css'
})
export class TerrainComponent {
  terrains: any[] = [];
  terr: any=[] ;
  newTerrain: any= { nom: '', surface: '' };

  constructor(private apiService: ApiServiceService) {
    this.getAllTerrains(); // Appel direct lors de la création
  }

  getAllTerrains(): void {
    this.apiService.getAllTerrains().subscribe({
      "next" : data=>{ this.terr=data},
      "error" : err => {},
      "complete":()=>{}
    });
  }

  addTerrain(): void {
    this.apiService.addTerrain(this.newTerrain).subscribe((data) => {
      this.terrains.push(data);
      this.newTerrain = { nom: '', surface: '' };
    });
  }

  deleteTerrain(id: number): void {
    this.apiService.deleteTerrain(id).subscribe(() => {
      this.terrains = this.terrains.filter((terrain) => terrain.id !== id);
    });
  }

}
