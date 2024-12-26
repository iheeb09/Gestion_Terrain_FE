import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdherantComponent } from './adherant/adherant.component';
import { TerrainComponent } from './terrain/terrain.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AddResComponent } from './add-res/add-res.component';
import { AddAdherantComponent } from './add-adherant/add-adherant.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './Auth.guard';

const routes: Routes = [

  


  {
    path:"login", component:LoginComponent
  },
  {
    path:"", component:LayoutComponent,
    canActivate:[AuthGuard],

    children :
     [
      {path:"adherant",component:AdherantComponent},
      {path:"terrain",component:TerrainComponent},
      {path:"reservation",component:ReservationComponent},
      {path:"AddRes",component:AddResComponent},
      {path:"AddAdherant",component:AddAdherantComponent},
      {path:"", redirectTo:"/reservation" ,pathMatch:"full"}
      
    ]
  
  
  },
  { path:"", redirectTo:"/login" , pathMatch:"full"}



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
