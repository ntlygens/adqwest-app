import { Component, OnInit } from '@angular/core';
import { GENERAL_ROUTES } from '../../app-routing.module';
import { HeaderMenuType } from '../../app.enum';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    menuButtons: any[];
    homeButton: any;
    isCollapsed = true;

    constructor() { }

    ngOnInit() {
        this.menuButtons = GENERAL_ROUTES.filter(menuBtn => menuBtn.menuType === HeaderMenuType.USER);
        this.homeButton = GENERAL_ROUTES.filter(homeBtn => homeBtn.menuType === HeaderMenuType.BRAND)[0];
    }

    public get menuIcon(): string{
        return this.isCollapsed ? '☰' : '✖';
    }

    public getMenuItemClasses(menuBtn: any) {
        return {
            'pull-xs-right': this.isCollapsed && menuBtn.menuType === HeaderMenuType.DATA
        };
    }

}
