import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string;
  usernames: Array<string>;

  constructor() {
    this.username = '';
    this.usernames = [];
  }

  ngOnInit() {
  }

  onButtonClicked(event: Event): void {
    if (this.username !== '') {
      this.usernames.push(this.username);
      this.username = '';
    }
  }

}
