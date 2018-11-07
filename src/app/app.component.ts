import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: "Titre 1",
      content: "Ullamco adipisicing elit eiusmod excepteur sunt deserunt consequat.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Titre 2",
      content: "Ullamco adipisicing elit eiusmod excepteur sunt deserunt consequat.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Titre 3",
      content: "Ullamco adipisicing elit eiusmod excepteur sunt deserunt consequat.",
      loveIts: 0,
      created_at: new Date()
    },
  ]

  // onLiked(){
  //   this.likes += 1;
  // }

  // onDisliked () {
  //   this.likes -= 1;
  // }

  // clicked() {
  //   this.likes+=1;
  // }
  
}
