import { Component } from '@angular/core';
import { Post } from './post';

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
}
