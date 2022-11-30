import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  bookTitle = ""

  bookTitleValue=()=>
  {
    let data:any = {"bookTitle":this.bookTitle}
    console.log(data)
  }
}
