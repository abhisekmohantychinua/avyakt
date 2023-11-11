import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input({ required: true }) event?: Event;
}
