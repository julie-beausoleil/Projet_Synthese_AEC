import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-stage',
  templateUrl: './fiche-stage.component.html',
  styleUrls: ['./fiche-stage.component.sass']
})
export class FicheStageComponent implements OnInit {

  longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum facilisis eros, ut
  dapibus quam hendrerit nec. Vestibulum vel blandit lorem. Praesent laoreet quis tortor quis pharetra. Nulla dictum erat id
  nisl pulvinar, ac aliquam lectus laoreet. Aliquam commodo pulvinar odio vitae interdum. Phasellus ut ante efficitur,
  venenatis purus sit amet, condimentum leo. Pellentesque nulla sem, consectetur.<br><br>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum facilisis eros, ut
  dapibus quam hendrerit nec. Vestibulum vel blandit lorem. Praesent laoreet quis tortor quis pharetra. Nulla dictum erat id
  nisl pulvinar, ac aliquam lectus laoreet. Aliquam commodo pulvinar odio vitae interdum. Phasellus ut ante efficitur.`;

  TexteCourt = `Diplôme d'études collégiales ou équivalent`;

  TexteCourt2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum facilisis eros, ut
  dapibus quam hendrerit nec. Vestibulum vel blandit lorem. Praesent laoreet quis tortor quis pharetra. Nulla dictum erat id
  nisl pulvinar, ac aliquam lectus laoreet. Aliquam commodo pulvinar odio vitae interdum. Phasellus ut ante efficitur,
  venenatis purus sit amet, condimentum leo. Pellentesque nulla sem, consectetur.<br><br>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum facilisis eros, ut
  dapibus quam hendrerit nec. Vestibulum vel blandit lorem. Praesent laoreet quis tortor quis pharetra. Nulla dictum erat id
  nisl pulvinar, ac aliquam lectus laoreet. Aliquam commodo pulvinar odio vitae interdum. Phasellus ut ante efficitur.`;
      
  longText2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum facilisis eros, ut
dapibus quam hendrerit nec. Vestibulum vel blandit lorem. Praesent laoreet quis tortor quis pharetra. Nulla dictum erat id
nisl pulvinar, ac aliquam lectus laoreet. Aliquam commodo pulvinar odio vitae interdum. Phasellus ut ante efficitur,
venenatis purus sit amet, condimentum leo. Pellentesque nulla sem, consectetur`

  constructor() { }

  ngOnInit(): void {
  }

}
