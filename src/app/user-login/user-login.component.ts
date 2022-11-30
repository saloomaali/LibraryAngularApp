import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username = ""
  password = ""
  
constructor(private route:Router){}

  userloginValue = () =>{
    let data:any = {"username":this.username,"password":this.password}
    console.log(data)

    if(this.username == "salooma" && this.password == "51324"){

      this.route.navigate(['/view'])
    }
  }

}
