import { Component, Output, EventEmitter } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'ws-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.scss']
})
export class BookAddFormComponent {
  @Output() create = new EventEmitter<Book>();

  createNewBook(isbn, title, authors, price, description) {
    const book = new Book(title.value,
                          '',
                            isbn.value,
                          '',
                          authors.value,
                          description.value,
                          price.value);

    this.create.emit(book);
  }
}
