import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

private dados = {
	post: new Post("","","","","",""),
	arquivo: null
}

constructor(public dialogref: MatDialogRef<PostDialogComponent>) {}

  ngOnInit() {
  }

}
