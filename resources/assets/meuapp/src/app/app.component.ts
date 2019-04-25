import { Component } from '@angular/core';
import { Post } from './post';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  private posts: Post[] = [
  	new Post("Joao", "meu post", "sub Joao", "joao@gmail.com", "Minha MSG"),
  	new Post("Maria", "meu post", "sub Maria", "Maria@gmail.com", "Minha MSG Maria"),
  	new Post("Joaquim", "meu post", "sub Joaquim", "Maria@gmail.com", "Minha MSG Maria"),
  ];


constructor(public dialog: MatDialog) {}

  openDialog() {
  	const dialogRef = this.dialog.open(PostDialogComponent, {width: '400px'});
    dialogRef.afterClosed().subscribe(
      (result) =>{
         if (result){
          console.log(result);
         }
      });
  }
}
