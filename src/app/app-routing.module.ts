import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostCreateComponent } from './post/post-create/post-create.component';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create', component: PostCreateComponent},
  {path: 'edit/:postId', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //takes route config to be aware of our routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
