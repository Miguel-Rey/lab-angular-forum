import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SessionService } from '../../services/session';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
  singleThread: any;
  replies = []
  constructor(private routes: ActivatedRoute, private ThreadsService: ThreadsService, private SessionService: SessionService) { }

  ngOnInit() {
    this.routes.params.subscribe( params => {
      this.ThreadsService.getThreadById(params.id).subscribe( data => {
        console.log(data)
        this.singleThread = data;
        this.replies = data.replies
      })
    })
  }
  
  newReply(content) {
    const userId = this.SessionService.user._id
    this.routes.params.subscribe( params => {
      this.ThreadsService.addReply(params.id, content, userId).subscribe( data => {
        console.log(data)
      })
    })
  }

}
