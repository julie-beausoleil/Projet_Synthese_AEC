import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.sass']
})
export class CandidatsComponent implements OnInit {
  longText = `plume@latraverse.com `;
  tel = `819-999-9999 `;
  constructor() { }

  ngOnInit(): void {
  }

}
