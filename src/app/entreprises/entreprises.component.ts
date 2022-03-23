import { Component, OnInit, Input } from '@angular/core';
import { Entreprise } from "../dossierDesInterfaces/entreprise"; /* Importation de mon interface */

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})
export class EntreprisesComponent implements OnInit {

  @Input() entreprise?: Entreprise;
  entreprises: Entreprise[] = [];
  selectedEntreprise?: Entreprise;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(entreprise: Entreprise): void {
    this.selectedEntreprise = entreprise;
  }


}