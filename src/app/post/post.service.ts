import { Subject } from 'rxjs';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}
  getPosts() {
    this.http
      .get<{ message: string; data: Post[] }>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.data;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    this.http.post<{ message: string }>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    })
  }
}
