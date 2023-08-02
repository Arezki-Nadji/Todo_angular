import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationComponent } from '../dialog-information/dialog-information.component';
import { DialogQuestionComponent } from '../dialog-question/dialog-question.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() listItem;


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  toggleFavourite() {

    this.listItem.favourite = !this.listItem.favourite
  }

  openDialog()
  {
    const myDialog = this.dialog.open(DialogQuestionComponent, {
      disableClose: true,
      data: {
        title: 'Mon titre',
        text: 'Voici un texte cool',
        labelNo: 'Finalement non merci !',
        labelYes: 'Vas-y!'
      }
    });
    myDialog.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
