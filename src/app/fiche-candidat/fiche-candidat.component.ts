import { Component, OnInit, Input} from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';
import { CandidatService } from '../dossierDesServices/candidat.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fiche-candidat',
  templateUrl: './fiche-candidat.component.html',
  styleUrls: ['./fiche-candidat.component.sass']
})
export class FicheCandidatComponent implements OnInit {
  @Input() titre: String = "Annuler";
  
  candidat: Candidat = {
    _id: "",
    name: "",
    description: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    published: false,
  };

  constructor(private candidatService: CandidatService,
      private Location: Location) { }

  ngOnInit(): void {
  }
  annuler(): void {
    this.Location.back();
  }

}
