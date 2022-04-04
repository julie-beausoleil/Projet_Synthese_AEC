import { Component, OnInit, Input} from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editer-candidat',
  templateUrl: './editer-candidat.component.html',
  styleUrls: ['./editer-candidat.component.sass']
})
export class EditerCandidatComponent implements OnInit {
  @Input() titre: String = "Annuler";
  constructor(private Location: Location) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.Location.back();
  }

}
