import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  loginPanel: boolean = true;
  fname: string;
  lname: string;
  username: string;
  password: string;

  constructor() { }

  createAccount(f){
    console.log(f.value);
  }

  login(f){
    console.log(f.value);
  }

  ngOnInit(): void {
  }

}
