import { Component } from '@angular/core';
import { NotificationService } from './notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Notifications!';

  constructor (private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotifications();
  }

}
