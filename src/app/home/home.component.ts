import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {StudentAddComponent} from '../student/student-add/student-add.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentAddComponent, {
      width: '350px',
      data: {mode: 'NEW'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

  }
}

