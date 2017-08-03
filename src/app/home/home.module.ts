import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdToolbarModule,
    MdButtonToggleModule

} from '@angular/material';


import { GENERAL_ROUTES, GENERAL_ROUTES_COMPONENTS } from '../app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GENERAL_ROUTES),
        FormsModule,
        ReactiveFormsModule,
        MdCardModule,
        MdButtonModule,
        MdListModule,
        MdIconModule,
        MdToolbarModule,
        MdButtonToggleModule

    ],
    declarations: [ GENERAL_ROUTES_COMPONENTS ],
    exports: [ GENERAL_ROUTES_COMPONENTS ]
})
export class HomeModule { }
