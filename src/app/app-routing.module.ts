import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './common/main/main.component';
import {ProfileComponent} from './common/profile/profile.component';
import {PageComponent} from './common/page/page.component';
import {LoginComponent} from './common/login/login.component';
import {RegisterComponent} from './common/register/register.component';
import {CoreckoComponent} from "./common/corecko/corecko.component";

const routes: Routes = [
  {
    path: 'corecko',
    component: CoreckoComponent
  },
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
