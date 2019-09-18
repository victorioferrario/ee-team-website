import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChildPage, ChildPageState, IChildPageState, IPageState, Load, EnumParse, NavContext, Page, PageState, ViewContext } from './models';
import { Title } from '@angular/platform-browser';
import { ScrollToService, ScrollToConfigOptions } from '@ee-workspace/scrollflow';
import { DataContextService, Results, Catalog } from '@ee-workspace/domain';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class AppViewContext {
    nav: NavContext;
    page: ViewContext;
    dispatch: EventEmitter<IPageState>;
    dispatchChild: EventEmitter<IChildPageState>;
    dispatchScroll: EventEmitter<boolean>;
    scrollElement: ElementRef;
    subscription: Subscription[];
    constructor(
        private router: Router,
        private titleService: Title,
        private scrollToService: ScrollToService,
        public dataContext: DataContextService) {
        const self = this;
        self.nav = new NavContext();
        self.page = new ViewContext(router, titleService);
        self.dispatch = new EventEmitter();
        self.dispatchChild = new EventEmitter();
        self.dispatchScroll = new EventEmitter();

    }
    public load(page: Page) {
        this.page.load(page);
    }
    public loadChild(child: ChildPage) {
        this.page.loadChild(child);
    }
    public complete(page: Page) {
        const self = this;
        self.page.complete(page);
        self.nav.update(EnumParse.GetPageIndex(page));
        self.dispatch.emit(new PageState(Load.Complete, page,
            EnumParse.GetPageIndex(page), EnumParse.GetPageInkState(page)));
    }
    public initializeSub(router: Router) {
        const self = this;
        // self.page.initializeSub(router);
    }

    public childComplete(child: ChildPage) {
        const self = this;
        self.page.childComplete(child);
        self.nav.updateChild(EnumParse.GetChildPageIndex(child));
        //this.context.nav.isTemplateEE
        self.dispatchChild.emit(new ChildPageState(Load.Complete, child,
            EnumParse.GetChildPageIndex(child), EnumParse.GetChildPageInkState(child)));
    }

    public scroll() {
        const config: ScrollToConfigOptions = {
            target: 'destination',
            easing: 'easeInOutQuart'
        };
        this.scrollToService.scrollTo(config);
    }
    public initScroll(el: ElementRef) {
        this.scrollElement = el;
    }
    public loadData() {
        const self = this;
        self.dataContext.dispatch.subscribe((arg: Results) => {
            self.datasource.next(arg.catalog);
        });
        self.dataContext.load();
    }
    datasource: BehaviorSubject<Results | Catalog | null>;
    //     self.context.dataContext.dispatch.subscribe((arg: Results) => {
    //         self.datasource.next(arg.catalog);
    //         let result = self.context.dataContext.dataset.where(x => x.id == 2);
    //         console.warn(result);
    //         if (result.length > 0) {
    //             console.info(result["list"][0]);
    //         }
    //     });
    // self.context.dataContext.load();


}