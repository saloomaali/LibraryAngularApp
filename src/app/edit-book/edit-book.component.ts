import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  bookTitle = ""

  bookTitleValue=()=>
  {
    let data:any = {"bookTitle":this.bookTitle}
    console.log(data)
  }
}
