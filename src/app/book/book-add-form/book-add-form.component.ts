import { Component, Output, EventEmitter } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'ws-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.scss']
})
export class BookAddFormComponent {
  book = Book.empty();

  @Output() create = new EventEmitter<Book>();

  createNewBook() {
    this.create.emit(this.book);
  }
}
