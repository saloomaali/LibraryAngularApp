import { Component } from '@angular/core';

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

  issueBookValue=()=>
  {
    let data:any = {
      "name":this.name,"dateOfIssue":this.dateOfIssue,"bookTitle":this.bookTitle,"membershipId":this.membershipId
    }
    console.log(data)
  }
}
