import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddBookComponent } from './book/addBook.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'addBook', component: AddBookComponent }
        ])
    ],
  declarations: [
      AppComponent,
      AddBookComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
