import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent {

  posts:any[]=[];
  title:string ="";
  content:string="";
  postsSubscription: Subscription;

  constructor(private postsService: PostService, private router: Router) { }

  onSubmit(f: NgForm) {

    this.title= f.value.nameTitle;
    this.content= f.value.nameContent;

    this.postsService.ajouterPost(this.title, this.content);
    this.router.navigate(['/posts']);

  }

}
