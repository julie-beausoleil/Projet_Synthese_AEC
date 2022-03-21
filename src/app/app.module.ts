import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CandidatService } from './candidat.service'; /* import service candidat dans module.ts par WC */
import { EntrepriseService } from './entreprise.service'; /* import service Entreprise dans module.ts par WC */
import { OffrestageService } from './offrestage.service'; /* import service OffreStage dans module.ts par WC */
import { RegionService } from './region.service'; /* import service RegionService dans module.ts par WC */
import { RequetestagaService } from './requetestaga.service'; /* import service RequeteStageService dans module.ts par WC */

import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
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

/* Listes Des Composants  */
import { BarreDeNavigationComponent } from './barre-de-navigation/barre-de-navigation.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { DemandesDeStagesComponent } from './demandes-de-stages/demandes-de-stages.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { OffresDeStageComponent } from './offres-de-stage/offres-de-stage.component';
import { RoutesComponent } from './routes/routes.component';
import { SideBarreComponent } from './side-barre/side-barre.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

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
    MatIconModule

  ],
  providers: [CandidatService,
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
