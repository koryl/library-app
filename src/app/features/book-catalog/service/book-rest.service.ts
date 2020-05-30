import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../../core/services/rest.service';
import { SearchBookResult } from '../models/search-book-result';

@Injectable({
    providedIn: 'root'
})
export class BookRestService extends RestService {

    searchForBooks(text: string): Observable<SearchBookResult> {
        return this.get<SearchBookResult>(`/book/search?searchText=${text}`);
    }
}
