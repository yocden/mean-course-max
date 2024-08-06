import { Component } from '@angular/core';

@Component({
  selector: 'post-create-component',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONTENT';
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
