import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../environments/environment';

import {map, catchError} from 'rxjs/operators';
import { Observable } from "../../node_modules/rxjs";
import { of } from 'rxjs';


const {BASEURL} = environment;

@Injectable()
export class ThreadsService {


  options:object = {withCredentials:true};

  constructor(private http: Http){

  }

  getThreads(){
    return this.http.get(`${BASEURL}/api/threads`, this.options).pipe(
      map( (res: Response) => {
        return res.json();
      })
    )
  }

  getThreadById(id){
    return this.http.get(`${BASEURL}/api/threads/${id}`, this.options).pipe(
      map( (res: Response) => {
        return res.json();
      })
    )
  }

  createNewThread(title, content, id){
    return this.http.post(`${BASEURL}/api/threads`, {title, content, id}, this.options).pipe(
      map( (res: Response) => {
        console.log(res.json())
      })
    )
  }

  addReply(id, content, userId){
    return this.http.post(`${BASEURL}/api/threads/${id}/replies`, {id: userId, content}, this.options).pipe(
      map ( (res:Response) => {
        console.log(res.json());
      })
    )
  }
}