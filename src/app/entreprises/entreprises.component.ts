import { Component, OnInit, Input } from '@angular/core';
import { Entreprise } from "../entreprise"; /* Importation de mon interface */

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})
export class EntreprisesComponent implements OnInit {

  @Input() entreprise? : Entreprise;    

  constructor() { }

  ngOnInit(): void {
  }


}

