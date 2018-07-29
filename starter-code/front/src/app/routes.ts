import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component';
import { ThreadsComponent } from './threads/threads.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';

export const routes: Routes = [
  { path: 'home', component: ThreadsComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path: 'new', component: NewThreadComponent},
  { path: 'singleThread/:id', component: SingleThreadComponent}
];