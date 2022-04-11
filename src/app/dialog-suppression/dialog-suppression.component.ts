import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { Entreprise } from "../dossierDesInterfaces/entreprise"; /* Importation de mon interface - SG */
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service -SG  */
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-dialog-suppression',
  templateUrl: './dialog-suppression.component.html',
  styleUrls: ['./dialog-suppression.component.sass']
})
export class DialogSuppressionComponent implements OnInit {

  entreprise : Entreprise = {
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

  constructor(public dialogRef : MatDialogRef<DialogSuppressionComponent>,
              private entrepriseService : EntrepriseService,
              private route: ActivatedRoute,
              private router: Router,) {};    


  ngOnInit(): void {
  }

  /* FONCTIONE POUR FERMER LE DIALOG LORS CLICK SUR ANNULER DANS LE DIALOG DE SUPRESSION */
  closeDialog(){
    this.dialogRef.close(false);
  }



}
