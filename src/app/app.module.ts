import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';


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
    AppComponent
  ],
  imports: [
    BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule.forRoot([]),
      BrowserAnimationsModule,
      HomeModule,
      HeaderModule,
      FooterModule,
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
