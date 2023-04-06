import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IComment } from '../SharedClasses/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  
  constructor(private http:HttpClient) { } 

  GetCommentsByPostId(postId:any):Observable<IComment[]> {

    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}
