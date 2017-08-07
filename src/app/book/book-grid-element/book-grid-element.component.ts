import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'ws-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.scss']
})
export class BookGridElementComponent implements OnInit {
  // <ws-book-grid-element [data] ...>
  @Input() data: Book;

  constructor() { }

  ngOnInit() {
  }

}
