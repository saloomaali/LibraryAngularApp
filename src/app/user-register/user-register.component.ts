import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name = ""
  adharCardNo = ""
  address = ""
  pincode = ""
  dob = ""
  emailId = ""
  phnNo = ""
  username = ""
  password = ""
  confirmPassword = ""

  constructor(private api:ApiService){}

  userRegisterValue=()=>{

    let data:any = {"name":this.name,"adharCardNo":this.adharCardNo,"address":this.address,"pincode":this.pincode,"dob":this.dob,"emailId":this.emailId,
  "phnNo":this.phnNo,"username":this.username,"password":this.password,"confirmPassword":this.confirmPassword}
  console.log(data)

    this.api.userAdd(data).subscribe(

      (response:any)=>{

        if (this.password == this.confirmPassword) {
          if (response.status == "success"){

            alert("User Registerd successfully")
            window.location.reload()
            
          }
        }
        else{
          alert("password and confirm password mismatches")
        }
        
      }

    )

  }

}
