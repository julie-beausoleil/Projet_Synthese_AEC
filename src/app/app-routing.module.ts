import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Liens pour la side barre (barre de navigation) */
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { DemandesDeStagesComponent } from './demandes-de-stages/demandes-de-stages.component';
import { OffresDeStageComponent } from './offres-de-stage/offres-de-stage.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { ListeEntreprisesComponent } from './liste-entreprises/liste-entreprises.component';

const routes: Routes = [
/* On laisse vide pour définir la page du tableau de bord par défaut lors de l'ouverture  */
  { path: '', component: TableauDeBordComponent },
  { path: 'tableau-de-bord', component: TableauDeBordComponent },
  { path: 'demandes-de-stages', component: DemandesDeStagesComponent },
  { path: 'offres-de-stage', component: OffresDeStageComponent},
  { path: 'candidats', component: CandidatsComponent },
  { path: 'entreprises', component: ListeEntreprisesComponent}, /* modifier ici */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
