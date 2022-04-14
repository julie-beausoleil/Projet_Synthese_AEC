import { Component, OnInit, Input, } from '@angular/core';
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

   
   @Input() entreprise : Omit<Entreprise, "_id"> = {
    name: "",
    description: "",
    imageUrl: "Section non fonctionnel / pas obligatoire",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    published: false,
  };   

  constructor(private entrepriseService : EntrepriseService,
                private router : Router) { }


  ngOnInit(): void {
  }


  saveEntreprise(entrepriseForm : NgForm) : void {
    if (entrepriseForm.valid){
      if (this.entreprise != null && this.entreprise)
      this.entrepriseService.addEntreprise(this.entreprise)
      .subscribe(() => this.router.navigate(["/entreprises"]));
      }    
   }
  }

 
