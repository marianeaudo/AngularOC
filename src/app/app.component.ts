import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  post = {
    title: "Mon Premier Post",
    content: "Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic! Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic!",
    loveIts: 0,
    created_at: Date()
  }

  post2 = {
    title: "Mon Deuxième Post",
    content: "Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic! Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic!",
    loveIts: 0,
    created_at: Date()
  }

  post3 = {
    title: "Mon Troisième Post",
    content: "Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic! Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic!",
    loveIts: 0,
    created_at: Date()
  }

  posts: any[]=[]

  ngOnInit() {
    this.posts.push(this.post, this.post2, this.post3);
  }

}
