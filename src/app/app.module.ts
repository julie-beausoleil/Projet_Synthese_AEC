import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
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
import { EnteteComponent } from './components-pages/entete/entete.component';
import { PiedPageComponent } from './components-pages/pied-page/pied-page.component';
import { DialogFormulaireInternshipRequestComponent } from './components-pages/internship-request/dialog-formulaire-internship-request/dialog-formulaire-internship-request.component';
import { FormulaireInternshipRequestComponent } from       './components-pages/internship-request/formulaire-internship-request/formulaire-internship-request.component';
import { TableInternshipRequestComponent } from './components-pages/internship-request/table-internship-request/table-internship-request.component';
@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    DialogFormulaireInternshipRequestComponent,
    FormulaireInternshipRequestComponent,
    TableInternshipRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
