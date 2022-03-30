import { Component, OnInit } from '@angular/core';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';
import { OffrestageService } from '../dossierDesServices/offrestage.service';

@Component({
  selector: 'app-dernieres-offres',
  templateUrl: './dernieres-offres.component.html',
  styleUrls: ['./dernieres-offres.component.sass']
})
export class DernieresOffresComponent implements OnInit {
  offresStages: OffreStage[] = [];

  constructor(private OffrestageService: OffrestageService) { }

  ngOnInit(): void {
    this.getOffresStages();
  }

  getOffresStages(): void {
    this.OffrestageService.getOffreStages()
      .subscribe((res: OffreStage[]) => (this.offresStages = res));
  }
  OnDelete(OffresStages: OffreStage): void {
    this.OffrestageService.deleteOffreStage(OffresStages._id)
      .subscribe(_result => this.offresStages = this.offresStages.filter(p => p !== OffresStages));
  }

}
