import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { JoueurlistComponent } from './joueurlist/joueurlist.component';
import { EquipelistComponent } from './equipelist/equipelist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddFormEquipeComponent } from './add-form-equipe/add-form-equipe.component';
import { AddFormJoueurComponent } from './add-form-joueur/add-form-joueur.component';
import { AddFormStaffComponent } from './add-form-staff/add-form-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    StafflistComponent,
    JoueurlistComponent,
    EquipelistComponent,
    AddFormEquipeComponent,
    AddFormJoueurComponent,
    AddFormStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
