import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../dossierDesInterfaces/entreprise';
import { EntrepriseService } from '../dossierDesServices/entreprise.service';

@Component({
  selector: 'app-fiche-entreprise',
  templateUrl: './fiche-entreprise.component.html',
  styleUrls: ['./fiche-entreprise.component.sass']
})
export class FicheEntrepriseComponent implements OnInit { 

  entreprises : Entreprise[]= [] ;   
  selectedEntreprise?: Entreprise; 
  columnsToDisplay = ["address", 'actions'];

  constructor(private entrepriseService : EntrepriseService) { }

  ngOnInit(): void {
  }

}
