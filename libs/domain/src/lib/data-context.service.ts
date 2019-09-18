// @ee-workspace/generic-collections
import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from './core';
import { Configuration } from './data-config';
import { CatalogItem, ICatalogItem, Results, Row, Catalog } from './models/CatalogItem';
import { List } from '@ee-workspace/generic-collections';
@Injectable()
export class DataContextService {
    hasData: BehaviorSubject<boolean>;
    selectedItem: BehaviorSubject<ICatalogItem | null>;
    selectedIndex: BehaviorSubject<number | null>;
    datasource: BehaviorSubject<Results | Catalog | null>;
    public options: IHttpBaseOptions;
    public dataset: List<ICatalogItem>;
    protected rawArray: ICatalogItem[] = [];
    dispatch: EventEmitter<any>;
    constructor(private baseClient: HttpBaseClient) {
        const self = this;
        self.hasData = new BehaviorSubject<boolean>(false);
        self.hasData.asObservable();
        self.options = new HttpBaseOptions();
        self.dispatch = new EventEmitter<any>();
        self.dataset = new List<ICatalogItem>();
        self.datasource = new BehaviorSubject<Results>(null);
        self.datasource.asObservable();
        self.datasource.subscribe((change => {
            console.log('changed', change);
        }))
        self.selectedItem = new BehaviorSubject<ICatalogItem>(null);
        self.selectedItem.asObservable();
        self.selectedIndex = new BehaviorSubject<number>(null);
        self.selectedIndex.asObservable();
        self.selectedIndex.subscribe((newIndex => {
            let result = self.dataset.where(x => x.id == newIndex);
            if (result.length > 0) {
                self.selectedItem.next(result["list"][0]);
            }
        }));
    }
    protected getData(): Observable<any> {
        const self = this;
        self.options.url = Configuration.DataApi;
        return self.baseClient.get<any>(self.options);
    }
    public load() {
        const self = this;
        self.rawArray = [];
        self.getData().subscribe((data: any) => {
            const list: Results = data;
            list.catalog.forEach((group: Row) => {
                group.row.forEach((catalogItem: ICatalogItem) => {
                    self.rawArray.push(catalogItem);
                })
            });
            self.hasData.next(true);
            self.datasource.next(list.catalog);
            self.dataset = new List<ICatalogItem>(self.rawArray);
            self.dispatch.emit(true);
        });
    }
}