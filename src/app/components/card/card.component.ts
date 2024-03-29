import { Component, Input } from '@angular/core';
import { Countries } from 'src/app/model/countries';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() country?: Countries;
}
