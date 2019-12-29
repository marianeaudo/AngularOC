
import { Subject } from 'rxjs';
import { Injectable} from '@angular/core';

@Injectable()
export class PostService {

    postSubject = new Subject();

    posts = [
        {
            title: "Mon Premier Post",
            content: "Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic! Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic!",
            loveIts: 0,
            created_at: Date()
        },
        {
            title: "Mon Deuxième Post",
            content: "Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic! Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic!",
            loveIts: 0,
            created_at: Date()
        },
        {
            title: "Mon Troisième Post",
            content: "Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic! Officiis placeat ut voluptates neque tenetur, nobis facere, cum tempora ipsum quibusdam ad unde, saepe dolorem quod adipisci? Necessitatibus nisi quasi similique facilis exercitationem minima esse neque, sed aspernatur hic!",
            loveIts: 0,
            created_at: Date()
        }
    ]

    like(index: number) {
        this.posts[index].loveIts++;
    }

    dislike(index: number) {
        this.posts[index].loveIts--;
    }

    emitPostSubject() {
        this.postSubject.next(this.posts);
    }

    ajouterPost(title: string, content: string) {
        let post = { title: title, content: content, loveIts: 0, created_at: Date() };
        this.posts.push(post);
    }

    supprimerPost(index: number) {
        this.posts.splice(index,1);
    }

}