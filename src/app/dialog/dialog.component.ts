import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel) {
    this.title = data.title;
    this.message = data.message;
  }
  ngOnInit() {
  }
  onCommand(): void {
    this.dialogRef.close(true);
  }
  onDelete(): void {
    this.dialogRef.close(false);
  }

}
  export class DialogModel {
  constructor(public title: string, public message: string) {
  }

}