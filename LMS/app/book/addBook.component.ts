import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IBook } from '../models/book';
import { Book } from '../models/book';
import { BookService } from '../book/book.service';

@Component({
    templateUrl: 'app/book/addBook.component.html'
})

export class AddBookComponent {
    hasValidationErrors: boolean = false;
    formErrors: string = '';
    book: IBook = new Book();

    constructor(private _router: Router, private _bookService: BookService) { }

    save(): void {
        try {
            this._bookService.save(this.book);
        }
        catch (ex)
        {
            var test = ex;
        }
    }

    cancel(): void {
        this._router.navigate(['/home']);
    }
}