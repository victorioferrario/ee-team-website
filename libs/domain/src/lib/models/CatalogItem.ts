import { Nullable } from './Nullable';
export interface ICatalogItem {
    id: number;
    title: string;
    author: string;
    published: string;
    description: string;
    code: Nullable<string>;
    thumb: Nullable<string>;
    video: Nullable<string>;
    duration: Nullable<string>;
}
export class CatalogItem implements ICatalogItem {
    id: number;
    title: string;
    author: string;
    published: string;
    description: string;
    code: Nullable<string>;
    thumb: Nullable<string>;
    video: Nullable<string>;
    duration: Nullable<string>;
}
export interface Row {
    row: ICatalogItem[];
}
export interface Catalog extends Array<Row> {

}
export interface Results {
    catalog: Row[];
}