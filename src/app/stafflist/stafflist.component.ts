import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from '../staff';
import { StaffServiceService } from '../staff-service.service';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit {
  staffs!: Observable<Staff[]>;
  constructor(private staffService: StaffServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.staffs = this.staffService.getStaffsList();
  }

}
