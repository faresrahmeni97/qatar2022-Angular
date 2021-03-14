import { Component, OnInit } from '@angular/core';
import { JoueurServiceService } from '../joueur-service.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-joueurlist',
  templateUrl: './joueurlist.component.html',
  styleUrls: ['./joueurlist.component.css']
})
export class JoueurlistComponent implements OnInit {
  joueurs!: Observable<any>;

  constructor(private joueurService: JoueurServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.joueurs = this.joueurService.getJoueursList();
    console.log("fares")
  }

}
