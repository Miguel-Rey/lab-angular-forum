import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads';
import { SessionService } from '../../services/session';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: any = [];
  constructor(private ThreadsService: ThreadsService, private SessionService: SessionService) { }

  ngOnInit() {
    this.ThreadsService.getThreads().subscribe( (data) => {
        console.log(data);
        this.threads = data;
    });
  }

  

}
