import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editer-demande-stage',
  templateUrl: './editer-demande-stage.component.html',
  styleUrls: ['./editer-demande-stage.component.sass']
})
export class EditerDemandeStageComponent implements OnInit {
@Input() titre: String = "Annuler";
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.location.back();
  }

}
