import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  submitted: boolean = false;

  login(f){
    console.log(f.value);
    this.submitted = true
  }

  ngOnInit(): void {
  }

}
