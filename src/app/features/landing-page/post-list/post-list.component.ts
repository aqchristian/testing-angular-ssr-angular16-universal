import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from 'src/app/core/models/post.inteface';
import { PostService } from 'src/app/core/services-api/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts$: Observable<Array<PostInterface>>;
  loadingSkeletons = Array(3).fill(0);

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts({ _limit: 10 });
  }
}
