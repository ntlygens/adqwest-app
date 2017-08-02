import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

import {
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdToolbarModule,
    MdButtonToggleModule
    } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      BrowserAnimationsModule,
      MdCardModule,
      MdButtonModule,
      MdListModule,
      MdIconModule,
      MdToolbarModule,
      MdButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
