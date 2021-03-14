import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Equipe } from '../equipe';
import { EquipeServiceService } from '../equipe-service.service';
import { Staff } from '../staff';
import { StaffServiceService } from '../staff-service.service';

@Component({
  selector: 'app-add-form-staff',
  templateUrl: './add-form-staff.component.html',
  styleUrls: ['./add-form-staff.component.css']
})
export class AddFormStaffComponent implements OnInit {

  staff: Staff = new Staff();
  ideq!:number;
  submitted = false;

  constructor(private staffService: StaffServiceService,private equipeService: EquipeServiceService,
    private router: Router) { }
    equipe !:Equipe
  ngOnInit() {
    this.equipeService.getEquipe(1).subscribe(data =>{
      this.equipe=data
    })
  }

  newStaff(): void {

    this.submitted = false;
    this.staff = new Staff();
    
  }

  save() {
    this.equipeService.getEquipe(this.ideq).subscribe(data =>{
      this.staff.equipe=data
      this.staffService
    .createStaff(this.staff).subscribe(data => {
      console.log(data)
      this.staff = new Staff();
    })
    
    
    
    
    })
   /* this.staffService
    .createStaff(this.staff).subscribe(data => {
      console.log(data)
      this.staff = new Staff();
    }, 
    error => console.log(error));
  */}

  onSubmit() {
 
    this.submitted = true;
    this.save();    
  }
}


