import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input()
  // tipo any permite qualquer formato
  movie: any;
  title = 'themovie-api';
}
