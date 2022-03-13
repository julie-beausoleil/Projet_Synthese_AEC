import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './components-pages/entete/entete.component';
import { PiedPageComponent } from './components-pages/pied-page/pied-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    EntrepriseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
