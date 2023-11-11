import { Component, Input } from '@angular/core';
import { Respected } from 'src/app/models/respected';

@Component({
  selector: 'app-respected',
  templateUrl: './respected.component.html',
  styleUrls: ['./respected.component.scss'],
})
export class RespectedComponent {
  @Input({ required: true }) respected?: Respected;
}
