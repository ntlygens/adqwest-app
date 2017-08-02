import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

import { MdCardModule, MdButtonModule, MdListModule, MdIconModule, MdToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      BrowserAnimationsModule,
      MdCardModule,
      MdButtonModule,
      MdListModule,
      MdIconModule,
      MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
