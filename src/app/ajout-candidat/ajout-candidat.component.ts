import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';

@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.sass']
})
export class AjoutCandidatComponent implements OnInit {
  @Input() candidat?: Candidat;
  constructor() { }

  ngOnInit(): void {
  }

}
