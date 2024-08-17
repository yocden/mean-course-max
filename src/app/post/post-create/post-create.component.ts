import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post.service';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post-create-component',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe();
  }
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      id: '12rwqe',
      title: form.value.title,
      content: form.value.content,
    };
    this.postsService.addPost(post);
    form.resetForm();
  }
}
