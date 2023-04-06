import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  constructor(private postService:PostsService, private router:Router) {}

  PostsList:any = [];
  errorMessage:any;

  ngOnInit(): void {
    
    this.postService.GetAllPosts().subscribe({
      next:data=>this.PostsList = data,
      error:error=>this.errorMessage = error
    });
  }
  GetAllPostComments(postId:any)
  {
     this.router.navigate(['/posts',postId])   
  }
}
