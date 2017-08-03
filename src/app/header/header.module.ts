import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from '../app-routing.module';

import { MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        MdToolbarModule,
        MdIconModule
    ],
    declarations: [ NavbarComponent, HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }
