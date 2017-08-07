import { Component } from '@angular/core';
import { Book } from './book/book';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ws';

  book = new Book(
    'Angular',
    'The 3-day workshop',
    '2121439432',
    '',
    ['Mîskó Hévéry'],
    20,
    5
  );
}
