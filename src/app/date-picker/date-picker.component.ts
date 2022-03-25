//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';



@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.sass']
})
export class DatePickerComponent{ // implements OnInit {

  constructor() { }
 
  minDate = new Date(1990, 0, 1);
  maxDate = new Date(2020,0,1);

  ngOnInit(): void {
  }

}
