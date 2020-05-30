import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCatalogRoutingModule } from './book-catalog-routing.module';
import { BookCatalogComponent } from './book-catalog.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookResultTableComponent } from './components/book-result-table/book-result-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ BookCatalogComponent, BookSearchComponent, BookResultTableComponent ],
  imports: [
    CommonModule,
    BookCatalogRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ]
})
export class BookCatalogModule { }
