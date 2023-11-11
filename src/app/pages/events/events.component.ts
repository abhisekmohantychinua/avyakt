import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { events } from 'src/app/storage/store';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  event: string = '';
  events: Array<Event> = [];
  constructor(private _route: ActivatedRoute, private router: Router) {
    this._route.queryParams.subscribe((params) => {
      this.event = params['event'];
      this.events = events.filter((event) => event.type === this.event);
    });
  }
}
