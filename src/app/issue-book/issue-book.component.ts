import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {

  name = ""
  dateOfIssue = ""
  bookTitle = ""
  membershipId = ""

  constructor(private api:ApiService){}

  issueBookValue=()=>
  {
    let data:any = {
      "name":this.name,"dateOfIssue":this.dateOfIssue,"bookTitle":this.bookTitle,"membershipId":this.membershipId
    }
    console.log(data)

    this.api.addIssue(data).subscribe(

      (response:any)=>{

        if (response.status == "success") {

          alert("Book issue updated")
          window.location.reload()
          
        }

      }

    )
  }
}
