import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = 
[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductComponent},
  {path:'posts',component:PostsComponent},
  {path:'users',component:UsersComponent},
  {path:'posts/:id',component:CommentsComponent},
  {path:'login',component:LoginComponent}, 
  {path:'register',component:RegisterComponent}, 
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
