import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username = ""
  password = ""
  
constructor(private api:ApiService, private route:Router){}

  userloginValue = () =>{
    let data:any = {"username":this.username,"password":this.password}
    console.log(data)

    this.api.userLogin(data).subscribe(

      (response:any)=>{

        if (response.length == 0) {

          alert("Invalid username or password")
          window.location.reload()

          
        } else {

          
          this.route.navigate(['/view'])
          
        }

      }
      
    )
    
  }

}
