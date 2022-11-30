import { Component } from '@angular/core';

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


  userRegisterValue=()=>{

    let data:any = {"name":this.name,"adharCardNo":this.adharCardNo,"address":this.address,"pincode":this.pincode,"dob":this.dob,"emailId":this.emailId,
  "phnNo":this.phnNo,"username":this.username,"password":this.password,"confirmPassword":this.confirmPassword}
  console.log(data)
  }

}
