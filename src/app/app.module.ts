import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { RouterModule, Routes } from '@angular/router';
import { IssueBookComponent } from './issue-book/issue-book.component';


const myRouter:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"register",
    component:UserRegisterComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent

  },
  {
    path:"view",
    component:ViewBooksComponent
  },
  {
    path:"search",
    component:SearchBookComponent
  },
  {
    path:"edit",
    component:EditBookComponent
  },
  {
    path:"delete",
    component:DeleteBookComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegisterComponent,
    UserLoginComponent,
    BookEntryComponent,
    ViewBooksComponent,
    SearchBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    IssueBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
