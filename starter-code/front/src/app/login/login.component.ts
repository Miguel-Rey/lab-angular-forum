import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private SessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string){
    return this.SessionService.login(username, password).subscribe( user => {
      this.router.navigate(['/'])
    })
  }

}
