import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  title = ""

  constructor(private api:ApiService){}

  searchData:any = []

  bookTitleValue=()=>
  {
    let data:any = {"title":this.title}
    console.log(data)

    this.api.searchBook(data).subscribe(

      (response:any)=>{

        if (response.lenth == 0) {

          alert("No such book found")
          
        } else {
          this.searchData = response
          
        }
      }

    )
  }
  deletebtn=(id:any)=>{

    let data:any = {"id":id}

    this.api.deleteBook(data).subscribe(

      (response:any)=>{

        if (response.status == "success") {

          alert("Book deleted successfully")
          window.location.reload()
          
        }
      }

    )
  }
}
