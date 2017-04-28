import { Component } from '@angular/core';

import { BookService } from '../app/book/book.service';

@Component({
    selector: 'libraryApp',
    templateUrl: 'app/app.component.html',
    providers: [ BookService ]
})

export class AppComponent { }
