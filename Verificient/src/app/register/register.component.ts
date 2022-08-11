import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  public registerform !:FormGroup;
  constructor(private FormBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerform=this.FormBuilder.group({
      Username:[''],
      Email:[''],
      Mobile:[''],
      password:[''],

    })
  }
  registerup(){
    this.http.post<any>("http://localhost:3000/registeruser",this.registerform.value)
     .subscribe(res=>{
       alert("Register Successfull");
       this.registerform.reset();
       this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })
   }
  }
   
 


