import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { ThreadsService } from '../../services/threads';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(private SessionService: SessionService, private ThreadsService: ThreadsService, private router: Router) { }

  ngOnInit() {
  }

  newPost(title, content){ 
    const userId = this.SessionService.user._id
    console.log(userId);
    this.ThreadsService.createNewThread(title, content, userId).subscribe( data => {
      this.router.navigate(['/home'])
    })
  }

}
