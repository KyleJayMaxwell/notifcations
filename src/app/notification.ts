import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotificationService {

    constructor(private http: Http) {}

    getNotifications() {
      return this.http.get('assets/invitations.json').map(
        (response) => response.json()
      ).subscribe(
        (data) => console.log(data)
      )
    }
}
