import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() lovesIt;
  @Input() created_at;

  likeNumber:number=0;
  dislikeNumber:number=0

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.likeNumber++;
  }

  onDislikeIt() {
    this.dislikeNumber++;
  }

}
