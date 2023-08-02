import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-information',
  templateUrl: './dialog-information.component.html',
  styleUrls: ['./dialog-information.component.css']
})
export class DialogInformationComponent implements OnInit {

  title: String;
  text: String;
  labelOk: String;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ){
    this.title = data.title;
    this.text = data.text;
    this.labelOk = data.labelOk;
  }

  ngOnInit(): void {
    
  }

}
