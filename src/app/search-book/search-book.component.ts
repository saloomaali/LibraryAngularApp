import { Component } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

   bookTitle = ""

  bookTitleValue=()=>
  {
    let data:any = {"bookTitle":this.bookTitle}
    console.log(data)
  }
}
