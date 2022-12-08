import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}

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

    this.api.addBook(data).subscribe(

      (response:any)=>{
        console.log(response)

        if (response.status == "success") {

          alert("Book added successfully")
          window.location.reload()
          
        }
      }

    )
  }
}
