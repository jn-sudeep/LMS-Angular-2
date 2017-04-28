import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './book/addBook.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'addBook', component: AddBookComponent },
            { path: 'addBook', component: AddBookComponent },
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ])
    ],
  declarations: [
      AppComponent,
      HomeComponent,
      AddBookComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
