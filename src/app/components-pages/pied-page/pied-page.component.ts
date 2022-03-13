import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pied-page',
  templateUrl: './pied-page.component.html',
  styleUrls: [ './pied-page.component.css']
})
export class PiedPageComponent implements OnInit {
  titre = 'Pied de page';
  constructor() { }

  ngOnInit(): void {
  }

}
