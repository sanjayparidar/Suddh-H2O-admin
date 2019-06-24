import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { MyService } from 'app/my.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
result:any;
massage:any="";
  constructor(private auth:AuthService,private router:Router,private service:MyService) { }
userModel={username:"",password:""}
  ngOnInit() {

  }
  
  onSubmit(){
    console.log(this.userModel)
    this.service.login(this.userModel)
    .subscribe(res=>{
      this.result=res;
      if(this.result.response=='success'){
       
    this.auth.sendToken('userLoggedin')
    this.router.navigate(['']); 
      }else{
        this.massage="Username and Password is incorrect"
      }
    })
    console.log("hello")

  }

}
