import { Book } from './book';

export interface SearchBookResult {
    content: Book[];
    totalPages: number;
    totalElements: number;
}
