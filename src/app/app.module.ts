import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


/* Les services */
import { CandidatService } from './dossierDesServices/candidat.service'; /* import service candidat dans module.ts par WC */
import { EntrepriseService } from './dossierDesServices/entreprise.service'; /* import service Entreprise dans module.ts par WC */
import { OffrestageService } from './dossierDesServices/offrestage.service'; /* import service OffreStage dans module.ts par WC */
import { RegionService } from './dossierDesServices/region.service'; /* import service RegionService dans module.ts par WC */
import { RequetestagaService } from './dossierDesServices/requetestaga.service'; /* import service RequeteStageService dans module.ts par WC */


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Voici Angular Material */
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

/* Listes Des Composants  */
import { BarreDeNavigationComponent } from './barre-de-navigation/barre-de-navigation.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { DemandesDeStagesComponent } from './demandes-de-stages/demandes-de-stages.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { OffresDeStageComponent } from './offres-de-stage/offres-de-stage.component';
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
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';
import { FicheEntrepriseComponent } from './fiche-entreprise/fiche-entreprise.component';
import { ListeEntreprisesComponent } from './liste-entreprises/liste-entreprises.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DialogFormulaireInternshipRequestComponent } from './dialog-formulaire-internship-request/dialog-formulaire-internship-request.component';
import { FormulaireInternshipRequestComponent } from './formulaire-internship-request/formulaire-internship-request.component';
import { TableInternshipRequestComponent } from './table-internship-request/table-internship-request.component';
import { ChipInputComponent } from './components-utilitaires/chip-input/chip-input.component';
import { SelectionComponent } from './selection/selection.component';
import { ListeCandidatComponent } from './liste-candidat/liste-candidat.component';
import { DernieresDemandesComponent } from './dernieres-demandes/dernieres-demandes.component';
import { DernieresOffresComponent } from './dernieres-offres/dernieres-offres.component';
import { ListeOffreStageComponent } from './liste-offre-stage/liste-offre-stage.component';
import { DialogComponent } from './dialog/dialog.component';

import { CounterEntreprisesComponent } from './counter-entreprises/counter-entreprises.component';
import { DialogSuppressionComponent } from './dialog-suppression/dialog-suppression.component';

import { CounterCandidatsComponent } from './counter-candidats/counter-candidats.component';
import { CounterOffresStagesComponent } from './counter-offres-stages/counter-offres-stages.component';
import { CounterDemandesStagesComponent } from './counter-demandes-stages/counter-demandes-stages.component';
import { ListeDemandeStageComponent } from './liste-demande-stage/liste-demande-stage.component';


registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    BarreDeNavigationComponent,
    CandidatsComponent,
    DemandesDeStagesComponent,
    EntreprisesComponent,
    OffresDeStageComponent,
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
    AjoutCandidatComponent,
    AjoutEntrepriseComponent,
    FicheEntrepriseComponent,
    ListeEntreprisesComponent,
    AccueilComponent,
    DatePickerComponent,
    DialogFormulaireInternshipRequestComponent,
    FormulaireInternshipRequestComponent,
    TableInternshipRequestComponent,
    ChipInputComponent,
    SelectionComponent,
    ListeCandidatComponent,
    DernieresDemandesComponent,
    DernieresOffresComponent,
    ListeOffreStageComponent,
    DialogComponent,
    CounterEntreprisesComponent,
    
    DialogSuppressionComponent,
    
    DialogSuppressionComponent,
    CounterCandidatsComponent,
    CounterOffresStagesComponent,
    CounterDemandesStagesComponent,
    ListeDemandeStageComponent

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
    MatInputModule,
    NoopAnimationsModule,
    MatChipsModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  ],

  providers: [CandidatService,
    EntrepriseService,
    OffrestageService,
    RegionService,
    RequetestagaService,
    { provide: LOCALE_ID, useValue: "fr-CA" }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogSuppressionComponent] /* MODAL SUPRESSION - SG */
})
export class AppModule { }
