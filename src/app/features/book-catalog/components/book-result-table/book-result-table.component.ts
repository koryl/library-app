import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { SearchBookResult } from '../../models/search-book-result';

@Component({
    selector: 'app-book-result-table',
    templateUrl: './book-result-table.component.html',
    styleUrls: [ './book-result-table.component.scss' ]
})
export class BookResultTableComponent {

    displayedColumns: string[] = [ 'select', 'position', 'title', 'author', 'isbn', 'pages', 'publisher', 'publicationDate' ];
    books = new MatTableDataSource<Book>();
    selection = new SelectionModel<Book>(true, []);

    constructor() {
    }

    @Input() set data(data: SearchBookResult) {
        if (data) {
            this.books.data = data.content;
        }
    }

    checkboxLabel(row?: Book): string {
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

}
