import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { SessionService } from '../services/session';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '../../node_modules/@angular/http';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadsService } from '../services/threads';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ThreadsComponent,
    NewThreadComponent,
    SingleThreadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [SessionService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
