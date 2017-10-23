import { Component, OnInit } from '@angular/core';
import { Invites } from './../models/invite.model';
import { NotificationService } from './../../services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inviteList: Invites;

  constructor (private notificationService: NotificationService) {}

  getNotificationList(): void {
      this.notificationService.getNotifications()
          .subscribe(
              inviteArray => this.inviteList = inviteArray,
              error => console.log('Error :: ' + error)
          )
  }

  ngOnInit() {
    this.getNotificationList();
  }

}
