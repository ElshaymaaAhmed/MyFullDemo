import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './TDF/login/login.component';
import { RegisterComponent } from './TDF/register/register.component';
import { RegisterRFComponent } from './ReactiveForms/register-rf/register-rf.component';
import { LoginRFComponent } from './ReactiveForms/login-rf/login-rf.component';
import { DiscountComponent } from './discount/discount.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';

const routes: Routes = 
[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductComponent,children:[
    {path:'discount',component:DiscountComponent},
    {path:'nodiscount',component:NoDiscountComponent}]},
  {path:'posts',component:PostsComponent},
  {path:'users',component:UsersComponent},
  {path:'posts/:id',component:CommentsComponent},
  {path:'login',component:LoginRFComponent}, // LoginComponent
  {path:'register',component:RegisterRFComponent}, //RegisterComponent 
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
