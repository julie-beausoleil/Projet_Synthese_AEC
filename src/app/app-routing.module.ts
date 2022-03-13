import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableInternshipRequestComponent } from './components-pages/internship-request/table-internship-request/table-internship-request.component';

const routes: Routes = [
  { path: 'administrationInternshipRequestComponent', component: TableInternshipRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
