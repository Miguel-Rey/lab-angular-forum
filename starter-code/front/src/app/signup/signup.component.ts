import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private SessionService: SessionService, private Router: Router) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password: string){
    return this.SessionService.signup(username, email, password).subscribe( user => {
      this.Router.navigate(['/login'])
    })
  }

}
