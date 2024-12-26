import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerrainComponent } from './terrain/terrain.component';
import { AdherantComponent } from './adherant/adherant.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AddResComponent } from './add-res/add-res.component';
import { AddAdherantComponent } from './add-adherant/add-adherant.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './Auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    TerrainComponent,
    AdherantComponent,
    ReservationComponent,
    AddResComponent,
    AddAdherantComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient(),AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
