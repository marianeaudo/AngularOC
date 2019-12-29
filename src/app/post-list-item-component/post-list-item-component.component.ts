import { Component, Input} from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at;
  @Input() index: number;

  constructor(private postsService : PostService) { 
  }

  compare(): string {
    if (this.loveIts <0) {
      return 'dislike';
    } else if (this.loveIts>0) {
      return 'like';
    }
  }

  onLoveIt(){
    this.postsService.like(this.index);
    console.log(this.postsService.posts[this.index].loveIts); 
  }

  onDislikeIt() {
    this.postsService.dislike(this.index);
  }

  onSupprimer() {
    this.postsService.supprimerPost(this.index);
  }



}
