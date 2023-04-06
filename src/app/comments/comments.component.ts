import { Component } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  CommentsList: any = [];
  errorMessage: any;
  postId: any;

  constructor(private commentService: CommentsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get("id");

      this.commentService.GetCommentsByPostId(this.postId).subscribe({
        next: data => this.CommentsList = data,
        error: error => this.errorMessage = error
      });
    });
  } 
}
