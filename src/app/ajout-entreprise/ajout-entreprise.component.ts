import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service */
import { Entreprise } from "../dossierDesInterfaces/entreprise";/* Importation de mon interface */
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-entreprise',
  templateUrl: './ajout-entreprise.component.html',
  styleUrls: ['./ajout-entreprise.component.sass']
})
export class AjoutEntrepriseComponent implements OnInit {

   /*  entreprise : Entreprise [] = []; */
   @Input() entreprise : Entreprise = {
    _id: " ",
    name: "",
    description: "",
    imageUrl: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    published: false,
  };  
  @Output() majTableau = new EventEmitter();

  constructor(private entrepriseService : EntrepriseService,
                private router : Router) { }


  ngOnInit(): void {
  }


  saveEntreprise() : void {
    this.entrepriseService.addEntreprise(this.entreprise)
      .subscribe(resultat => this.entreprise = resultat);      
    this.router.navigate(["entreprises"]);
  }
}
