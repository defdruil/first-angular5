import { GreatComponent } from './geat.component/great.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserFacebookComponent } from './users/user-facebook/user-facebook.component';


@NgModule({
  declarations: [
    AppComponent,
    GreatComponent,
    UserProfileComponent,
    UserFacebookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
