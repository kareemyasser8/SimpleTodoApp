import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loginPanel: boolean = true;
  fname: string;
  lname: string;
  username: string;
  password: string;
  submitted: boolean = false;

  createAccount(f){
    console.log(f.value);
    this.submitted =true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
