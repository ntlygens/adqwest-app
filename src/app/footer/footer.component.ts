import { Component, OnInit } from '@angular/core';
import { GENERAL_ROUTES } from '../app-routing.module';
import { HeaderMenuType } from '../app.enum';


@Component({
    selector: 'app-footer',
    template: `
        <nav class="breadcrumb fixed-bottom rounded-0 border-0">
            <a class="breadcrumb-item active" [routerLink]="[footerBrands.path]">{{footerBrands.title}}</a>
            <a *ngFor="let footerLink of footerMenuLinks" class="breadcrumb-item" [routerLink]="[footerLink.path]">{{footerLink.title}}</a>
        </nav>
      `,
    styles: [`
        .breadcrumb {
            margin-bottom: 0;
        }
    `]
})
export class FooterComponent implements OnInit {
    footerMenuLinks: any[];
    footerBrands: any;

    constructor() { }

    ngOnInit() {
        this.footerMenuLinks = GENERAL_ROUTES.filter( footerLink => footerLink.menuType === HeaderMenuType.USER);
        this.footerBrands = GENERAL_ROUTES.filter( footerBrand => footerBrand.menuType === HeaderMenuType.BRAND)[0];
    }

}
