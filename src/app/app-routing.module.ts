import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueurlistComponent } from './joueurlist/joueurlist.component';
import { StafflistComponent } from './stafflist/stafflist.component';

const routes: Routes = [
  /*{ path: 'joueurs', component: JoueurlistComponent },
{ path: 'staffs', component: StafflistComponent }*/];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
