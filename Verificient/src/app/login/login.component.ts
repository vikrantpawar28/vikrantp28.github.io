import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      Username:[''],
      Password:['']
   })
  }

  login(){
    this.http.get<any>("http://localhost:3000/registeruser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Username === this.loginForm.value.Username && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success!!");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("user not found");
      }
     },err=>{
      alert("Something went wrong!!")
    
    })
  }
}


