import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Invites } from './../app/models/invite.model';

@Injectable()
export class NotificationService {

    inviteUrl = 'assets/invitations.json';

    constructor(private http: Http) {}

    getNotifications(): Observable<Invites> {
      return this.http
        .get(this.inviteUrl)
        .map((response: Response) => {
          return <Invites>response.json();
        })
    }

}
