import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EquipeServiceService } from '../equipe-service.service';

@Component({
  selector: 'app-equipelist',
  templateUrl: './equipelist.component.html',
  styleUrls: ['./equipelist.component.css']
})
export class EquipelistComponent implements OnInit {
  equipes!: Observable<any>;

  constructor(private equipeService: EquipeServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.equipes = this.equipeService.getEquipesList();
    console.log("fares")
  }
}
