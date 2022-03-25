import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.css']
})
export class ChipInputComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Input()
  listeItems: string[] = [];

  @Output()
  listeItemsChange = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.listeItems.push(value);
      //console.log(this.listeItems);
      this.listeItemsChange.emit(this.listeItems);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(iItem: string): void {
    const index = this.listeItems.indexOf(iItem);

    if (index >= 0) {
      this.listeItems.splice(index, 1);
    }
  }
}

// https://material.angular.io/components/chips/api
// https://angularquestions.com/2020/01/09/angular-material-mat-chips-not-setting-to-be-removable/
// https://zoaibkhan.com/blog/create-a-multi-select-chips-component-with-angular-material/
