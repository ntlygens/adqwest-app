import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';

import { HeaderMenuType, HeaderRouteSchema } from './app.enum';



export const GENERAL_ROUTES: HeaderRouteSchema[] = [
    { path: '', title: 'Home', component: HomeComponent, menuType: HeaderMenuType.BRAND },
    { path: 'about', title: 'About', component: AboutComponent, menuType: HeaderMenuType.USER },
    { path: 'gallery', title: 'Gallery', component: GalleryComponent, menuType: HeaderMenuType.USER },
    { path: 'contacts', title: 'Contacts', component: ContactsComponent, menuType: HeaderMenuType.USER },
];

export const GENERAL_ROUTES_COMPONENTS = [
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactsComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [],
    exports: [ RouterModule ]

})
export class AppRoutingModule { }
