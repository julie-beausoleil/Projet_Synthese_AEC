import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';
import { Candidat } from '../candidat';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.sass']
})
export class CandidatsComponent implements OnInit {
  name = `Plume Latraverse `;
  description = `UX Designer `;
  longText = `plume@latraverse.com `;
  tel = `819-999-9999 `;

  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
  }

}
