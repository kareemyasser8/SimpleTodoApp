import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './../reducers';
import { AddUser } from '../actions/user.actions';
import { User } from '../User.model';

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
  displayedUsers: Array<User>

  constructor(private store: Store<State>) {
    store.select(state => state.users).subscribe({
      next: (users)=>{
          this.displayedUsers = users.users;
      }
    })
  }

  createAccount(f){
    console.log(f.value);
    this.store.dispatch(new AddUser(f.value))
    this.submitted =true;
  }

  ngOnInit(): void {
  }

}
