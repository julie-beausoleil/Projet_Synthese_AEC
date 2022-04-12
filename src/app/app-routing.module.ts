import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableInternshipRequestComponent } from './table-internship-request/table-internship-request.component';


/* Liens pour la side barre (barre de navigation) */
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { DemandesDeStagesComponent } from './demandes-de-stages/demandes-de-stages.component';
import { OffresDeStageComponent } from './offres-de-stage/offres-de-stage.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { ListeEntreprisesComponent } from './liste-entreprises/liste-entreprises.component';

/* Liens pour la barre de navigation */
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';
import { AjoutOffreStageComponent } from './ajout-offre-stage/ajout-offre-stage.component';

/* Liens pour la liste des fiches */
import { FicheCandidatComponent } from './fiche-candidat/fiche-candidat.component';
import { FicheEntrepriseComponent } from './fiche-entreprise/fiche-entreprise.component';
import { FicheDemandeComponent } from './fiche-demande/fiche-demande.component';

/* Liens pour la page s'accueil */
import { AccueilComponent } from './accueil/accueil.component';
import { ListeCandidatComponent } from './liste-candidat/liste-candidat.component';
import { ListeOffreStageComponent } from './liste-offre-stage/liste-offre-stage.component';
import { FicheStageComponent } from './fiche-stage/fiche-stage.component';

/* Liens pour les pages éditer */
import { EditerOffreStageComponent } from './editer-offre-stage/editer-offre-stage.component';

import { EditerDemandeStageComponent } from './editer-demande-stage/editer-demande-stage.component';

const routes: Routes = [
  /* On laisse vide pour définir la page du tableau de bord par défaut lors de l'ouverture  */
  { path: '', component: AccueilComponent },
  { path: 'tableau-de-bord', component: TableauDeBordComponent },
  { path: 'demandes-de-stages', component: DemandesDeStagesComponent },
  { path: 'offres-de-stage', component: OffresDeStageComponent },
  { path: 'liste-offre-stage', component: ListeOffreStageComponent },
  { path: 'fiche-stage', component: FicheStageComponent },
  { path: 'fiche-demande', component: FicheDemandeComponent},
  { path: 'editer-offre-stage', component: EditerOffreStageComponent },
  { path: 'editer-demande-stage', component: EditerDemandeStageComponent},
  { path: 'candidats', component: ListeCandidatComponent },
  /*
  { path: 'administrationInternshipRequestComponent', component: TableInternshipRequestComponent },*/
  { path: 'entreprises', component: ListeEntreprisesComponent },
  { path: 'entreprises/:_id', component: FicheEntrepriseComponent }, /* ROUTE POUR AFFICHER LA FICHE DE UNE ENTREPRISE - SG */
  { path: 'candidats/:_id', component: FicheCandidatComponent }, /* ROUTE POUR AFFICHER LA FICHE DE UN CANDIDAT - SG */

  /* Route pour les boutons d'ajout */
  { path: 'ajout-candidat', component: AjoutCandidatComponent },
  { path: 'ajout-demande-stage', component: AjoutDemandeStageComponent },
  { path: 'ajout-entreprise', component: AjoutEntrepriseComponent },
  { path: 'ajout-offre-stage', component: AjoutOffreStageComponent },

  /* Route pour les fiches */
  { path: 'fiche-candidat', component: FicheCandidatComponent },
  { path: 'fiche-entreprise', component: FicheEntrepriseComponent },


  /* Route pour les Édites */
  { path: 'editer-candidat', component: FicheCandidatComponent},
  { path: 'editer-entreprise', component: FicheEntrepriseComponent },


  /* Voici la page d'acceuil */
  { path: 'accueil', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
