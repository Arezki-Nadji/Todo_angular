import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.css']
})
export class DialogQuestionComponent implements OnInit {

  title: String;
  text : String;
  labelNo: String;
  labelYes : String;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data, public dialogRef : MatDialogRef<DialogQuestionComponent>
  ){
    this.title = data.title;
    this.text = data.text;
    this.labelNo = data.labelNo;
    this.labelYes = data.labelYes;
  }

  ngOnInit(): void {
    
  }

  sendAnswer(answer)
  {
    this.dialogRef.close(answer);
  }

}
