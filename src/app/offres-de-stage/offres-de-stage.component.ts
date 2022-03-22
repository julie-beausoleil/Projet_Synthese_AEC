import { Component, OnInit } from '@angular/core';
//import { DatePickerComponent } from '../date-picker/date-picker.component';



@Component({
  selector: 'app-offres-de-stage',
  templateUrl: './offres-de-stage.component.html',
  styleUrls: ['./offres-de-stage.component.sass']
})
export class OffresDeStageComponent implements OnInit {
  longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum facilisis eros, ut
  dapibus quam hendrerit nec. Vestibulum vel blandit lorem. Praesent laoreet quis tortor quis pharetra. Nulla dictum erat id
  nisl pulvinar, ac aliquam lectus laoreet. Aliquam commodo pulvinar odio vitae interdum. Phasellus ut ante efficitur, venenatis
  purus sit amet, condimentum leo. Pellentesque nulla sem, consectetur.`;

  TexteCourt = `AEC ou équivalent.`;

  TexteCourt2 = `HTML, CSS, JavaScript, React, vue.js, GIT
                PHP, MySQL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum
                facilisis eros, ut dapibus quam hendrerit nec.`;
      
  longText2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum facilisis eros, ut
               dapibus quam hendrerit nec. Vestibulum vel blandit lorem. Praesent laoreet quis tortor quis pharetra. Nulla dictum erat id
               nisl pulvinar, ac aliquam lectus laoreet. Aliquam commodo pulvinar odio vitae interdum. Phasellus ut ante efficitur, venenatis
               purus sit amet, condimentum leo. Pellentesque nulla sem, consectetur`

  constructor() { }

  ngOnInit(): void {
    
  }

}

