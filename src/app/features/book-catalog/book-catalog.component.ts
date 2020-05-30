import { Component, OnInit } from '@angular/core';
import { SearchBookResult } from './models/search-book-result';

@Component({
    selector: 'app-book-catalog',
    templateUrl: './book-catalog.component.html',
    styleUrls: [ './book-catalog.component.scss' ]
})
export class BookCatalogComponent implements OnInit {

    bookSearchResult: SearchBookResult;

    constructor() {
    }

    ngOnInit(): void {
    }

}
