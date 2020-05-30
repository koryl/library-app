import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BookRestService } from '../../service/book-rest.service';
import { SearchBookResult } from '../../models/search-book-result';

@Component({
    selector: 'app-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: [ './book-search.component.scss' ]
})
export class BookSearchComponent implements OnInit {

    @Output() searchBookEvent = new EventEmitter<SearchBookResult>();

    searchText: string;

    constructor(private bookService: BookRestService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'search',
            sanitizer.bypassSecurityTrustResourceUrl('src/assets/icons/search-black-18dp.svg'));
    }

    ngOnInit(): void {
    }

    search() {
        this.bookService.searchForBooks(this.searchText)
            .subscribe(searchResult => {
                console.log(searchResult);
                this.searchBookEvent.emit(searchResult);
            });
    }

}
