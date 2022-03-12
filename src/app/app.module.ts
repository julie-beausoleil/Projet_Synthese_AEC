import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* Voici Angular Material */
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

/* Listes Des Composants  */
import { BarreDeNavigationComponent } from './barre-de-navigation/barre-de-navigation.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { DemandesDeStagesComponent } from './demandes-de-stages/demandes-de-stages.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { OffresDeStageComponent } from './offres-de-stage/offres-de-stage.component';
import { RoutesComponent } from './routes/routes.component';
import { SideBarreComponent } from './side-barre/side-barre.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { FicheCVComponent } from './fiche-cv/fiche-cv.component';
import { EditerDemandeStageComponent } from './editer-demande-stage/editer-demande-stage.component';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';
import { IdentificationComponent } from './identification/identification.component';
import { FicheStageComponent } from './fiche-stage/fiche-stage.component';
import { EditerOffreStageComponent } from './editer-offre-stage/editer-offre-stage.component';
import { AjoutOffreStageComponent } from './ajout-offre-stage/ajout-offre-stage.component';
import { FicheCandidatComponent } from './fiche-candidat/fiche-candidat.component';
import { EditerCandidatComponent } from './editer-candidat/editer-candidat.component';
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';
import { EditerEntrepriseComponent } from './editer-entreprise/editer-entreprise.component';
import { FicheEntrepriseComponent } from './fiche-entreprise/fiche-entreprise.component';


@NgModule({
  declarations: [
    AppComponent,
    BarreDeNavigationComponent,
    CandidatsComponent,
    DemandesDeStagesComponent,
    EntreprisesComponent,
    OffresDeStageComponent,
    RoutesComponent,
    SideBarreComponent,
    TableauDeBordComponent,
    FicheCVComponent,
    EditerDemandeStageComponent,
    AjoutDemandeStageComponent,
    IdentificationComponent,
    FicheStageComponent,
    EditerOffreStageComponent,
    AjoutOffreStageComponent,
    FicheCandidatComponent,
    EditerCandidatComponent,
    AjoutCandidatComponent,
    AjoutEntrepriseComponent,
    EditerEntrepriseComponent,
    FicheEntrepriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
