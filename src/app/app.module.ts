import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MainComponent } from './common/main/main.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProfileComponent } from './common/profile/profile.component';
import { PageComponent } from './common/page/page.component';
import { CommentComponent } from './common/comment/comment.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProfileComponent,
    PageComponent,
    CommentComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
