import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

@Input () postTitle:string;
@Input () postContent:string;
@Input () loveIts:number;
@Input () currentDate:Date;

onLiked() {
  this.loveIts +=1;
}

onDisliked() {
  this.loveIts -=1;
}

getColor() {
  if (this.loveIts > 0) {
    return "#9CFDAE";
  }
  else if (this.loveIts < 0) { 
    return "#F8A2A2";
  }
}
  constructor() { }

  ngOnInit() {
  }

}
