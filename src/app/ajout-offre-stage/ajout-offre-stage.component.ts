import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajout-offre-stage',
  templateUrl: './ajout-offre-stage.component.html',
  styleUrls: ['./ajout-offre-stage.component.sass']
})
export class AjoutOffreStageComponent implements OnInit {
  @Input() titre: String = "Annuler";

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.location.back();
  }
}
