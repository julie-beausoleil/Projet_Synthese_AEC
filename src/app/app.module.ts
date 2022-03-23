import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';

/* Les services */
import { CandidatService } from './dossierDesServices/candidat.service'; /* import service candidat dans module.ts par WC */
import { EntrepriseService } from './dossierDesServices/entreprise.service'; /* import service Entreprise dans module.ts par WC */
import { OffrestageService } from './dossierDesServices/offrestage.service'; /* import service OffreStage dans module.ts par WC */
import { RegionService } from './dossierDesServices/region.service'; /* import service RegionService dans module.ts par WC */

import { HttpClientModule } from '@angular/common/http';
import { RequetestagaService } from './dossierDesServices/requetestaga.service'; /* import service RequeteStageService dans module.ts par WC */

import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Voici Angular Material */
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
import { ListeEntreprisesComponent } from './liste-entreprises/liste-entreprises.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DatePickerComponent } from './date-picker/date-picker.component';



import { EnteteComponent } from './components-pages/entete/entete.component';
import { PiedPageComponent } from './components-pages/pied-page/pied-page.component';
import { DialogFormulaireInternshipRequestComponent } from './components-pages/internship-request/dialog-formulaire-internship-request/dialog-formulaire-internship-request.component';
import { FormulaireInternshipRequestComponent } from './components-pages/internship-request/formulaire-internship-request/formulaire-internship-request.component';
import { TableInternshipRequestComponent } from './components-pages/internship-request/table-internship-request/table-internship-request.component';
import { ChipInputComponent } from './components-utilitaires/chip-input/chip-input.component';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

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
    FicheEntrepriseComponent,
    ListeEntreprisesComponent,
    AccueilComponent,
    DatePickerComponent,
    EnteteComponent,
    PiedPageComponent,
    DialogFormulaireInternshipRequestComponent,
    FormulaireInternshipRequestComponent,
    TableInternshipRequestComponent,
    ChipInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],

  providers: [
    CandidatService,
    EntrepriseService,
    OffrestageService,
    RegionService,
    RequetestagaService,
    HttpClientModule,
    NoopAnimationsModule,
    MatChipsModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    { provide: LOCALE_ID, useValue: "fr-CA" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
