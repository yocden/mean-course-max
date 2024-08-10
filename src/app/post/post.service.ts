import { Subject } from "rxjs";
import { Post } from "./post.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts() {
        return [...this.posts];
    }

    getPostUpdateListener(){
        return this.postsUpdated.asObservable();
    }

    addPost(post:Post){
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }
}