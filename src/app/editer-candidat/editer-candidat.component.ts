import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { CandidatService } from '../dossierDesServices/candidat.service';
import { Candidat } from '../dossierDesInterfaces/candidat';

@Component({
  selector: 'app-editer-candidat',
  templateUrl: './editer-candidat.component.html',
  styleUrls: ['./editer-candidat.component.sass']
})
export class EditerCandidatComponent implements OnInit {
  @Input() titre: String = "Annuler";
  @Input() candidat: Candidat = {
    _id: " ",
    name: " ",
    description: " ",
    jobTitle: " ",
    email: " ",
    phone: " ",
    address: " ",
    city: " ",
    province: " ",
    postalCode: " ",
    published: false,
  };

  constructor(private candidatService: CandidatService,
  private location: Location) { }

  ngOnInit(): void {
  }

   annuler(): void {
    this.location.back();
  }

}
