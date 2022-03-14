import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Liens pour la side barre (barre de navigation) */
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { DemandesDeStagesComponent } from './demandes-de-stages/demandes-de-stages.component';
import { OffresDeStageComponent } from './offres-de-stage/offres-de-stage.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';
import { AjoutOffreStageComponent } from './ajout-offre-stage/ajout-offre-stage.component';

const routes: Routes = [
/* On laisse vide pour définir la page du tableau de bord par défaut lors de l'ouverture  */
  { path: '', component: TableauDeBordComponent },
  { path: 'tableau-de-bord', component: TableauDeBordComponent },
  { path: 'demandes-de-stages', component: DemandesDeStagesComponent },
  { path: 'offres-de-stage', component: OffresDeStageComponent},
  { path: 'candidats', component: CandidatsComponent },
  { path: 'entreprises', component: EntreprisesComponent },
  { path: 'ajout-candidat', component: AjoutCandidatComponent },
  { path: 'ajout-demande-stage', component: AjoutDemandeStageComponent },
  { path: 'ajout-entreprise', component: AjoutEntrepriseComponent },
  { path: 'ajout-offre-stage', component: AjoutOffreStageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
