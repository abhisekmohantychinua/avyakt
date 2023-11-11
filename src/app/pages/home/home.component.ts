import { Component } from '@angular/core';
import { Respected } from 'src/app/models/respected';
import { respecteds } from 'src/app/storage/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  respecteds: Respected[];
  constructor() {
    this.respecteds = respecteds;
  }
}
