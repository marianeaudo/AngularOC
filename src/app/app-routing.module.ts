import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';


const appRoutes:Routes = [
  {path: 'posts', component: PostListComponentComponent},
  {path: 'new', component: NewPostComponentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
