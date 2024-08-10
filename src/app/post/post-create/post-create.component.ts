import { Component } from '@angular/core';
import { PostsService } from '../post.service';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'post-create-component',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = { title: form.value.title, content: form.value.content };
    this.postsService.addPost(post);
    form.resetForm();
  }
}
