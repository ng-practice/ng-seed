import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from 'clarity-angular';

import { UtilitiesModule } from '../utilities/utilities.module';

import { BookGridComponent } from './book-grid/book-grid.component';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { ViewToggleComponent } from './view-toggle/view-toggle.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ClarityModule.forChild(),

    UtilitiesModule
  ],
  declarations: [
    BookGridElementComponent,
    BookGridComponent,
    ViewToggleComponent,
    BookListComponent,
    BookListElementComponent,
    BookAddFormComponent],
  exports: [BookGridElementComponent, BookGridComponent, ViewToggleComponent, BookListComponent, BookAddFormComponent]
})
export class BookModule { }
