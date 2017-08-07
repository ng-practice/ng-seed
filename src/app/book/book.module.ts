import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from 'clarity-angular';

import { BookGridComponent } from './book-grid/book-grid.component';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';

@NgModule({
  imports: [
    CommonModule,

    ClarityModule.forChild()
  ],
  declarations: [BookGridElementComponent, BookGridComponent],
  exports: [BookGridElementComponent, BookGridComponent]
})
export class BookModule { }
