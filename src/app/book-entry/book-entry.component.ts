import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title = ""
  description = ""
  image = ""
  author = ""
  publisher = ""
  language = ""
  distributer = ""
  releaseYear = ""
  price = ""

  bookValue = () =>{

   let data:any = {

      "title":this.title,
  
      "description":this.description,
  
      "image":this.image,
      "publisher":this.publisher,
      "language":this.language,
      "distributer":this.distributer,
      "releaseYear":this.releaseYear,
      "price":this.price
  
    }
    console.log(data);
  }
}
