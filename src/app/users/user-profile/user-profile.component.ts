import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string;
  severity: string;
  usernames: Array<any>;

  constructor() {
    this.username = '';
    this.usernames = [];
    this.severity = 'info';
  }

  ngOnInit() {
  }

  onButtonClicked(event: Event): void {
    if (this.username !== '') {
      const date: Date = new Date();
      this.usernames.push({
        text: this.username,
        severity: this.severity.toUpperCase(),
        date: date.getHours() + ':' + date.getSeconds()});
      this.username = '';
      console.log(this.usernames);
    }
  }

}
