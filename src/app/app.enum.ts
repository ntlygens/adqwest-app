export enum HeaderMenuType {
    BRAND = <any>'Brand',
    USER = <any>'User',
    DATA = <any>'Data'

}

export interface HeaderRouteSchema {
    path: string;
    title: string;
    component: any;
    menuType: HeaderMenuType;
}
