import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IPageUrlItem } from './IPageUrlItem';
import { ChildPageIndex, ChildPage, Page, PageIndex, EnumParse } from './enums';
export class ViewContext {
    view: BehaviorSubject<Page>;
    viewLoaded: BehaviorSubject<Page>;
    viewIndex: BehaviorSubject<PageIndex>;
    sideNavIsOpen: boolean;
    subRouter: Router;
    child: BehaviorSubject<ChildPage>;
    childLoaded: BehaviorSubject<ChildPage>;
    childIndex: BehaviorSubject<ChildPageIndex>;
    list: IPageUrlItem[] = [
        { path: '', title: '' },
        { path: '/', title: 'Welcome: Engineering Excellence' },
        { path: 'team', title: 'Our Team' },
        { path: 'updates', title: 'News & Updates' },
        { path: 'resources', title: 'Resources' },
        { path: 'university', title: 'Excalibur University' },
        { path: 'catalog', title: 'Course Catalog' },
        { path: 'catalog-item-details', title: 'Course Details' },
        { path: 'catalog-item-viewer', title: 'Course Viewer' }
    ];
    childList: IPageUrlItem[] = [
        { path: 'home', title: 'Welcome: Excalibur University' },
        { path: 'catalog', title: 'Course Catalog' },
        { path: 'catalog-item-details', title: 'Course Details' },
        { path: 'catalog-item-viewer', title: 'Course Viewer' }
    ];
    constructor(private router: Router, private titleService: Title) {
        const self = this;
        self.view = new BehaviorSubject<Page>(Page.Home);
        self.view.asObservable();
        //
        self.viewIndex = new BehaviorSubject<PageIndex>(PageIndex.Home);
        self.viewIndex.asObservable();
        //
        self.viewLoaded = new BehaviorSubject<Page>(Page.None);
        self.viewLoaded.asObservable();
        //
        self.sideNavIsOpen = false;
        //
        self.child = new BehaviorSubject<ChildPage>(ChildPage.None);
        self.child.asObservable();
        //
        self.childIndex = new BehaviorSubject<ChildPageIndex>(ChildPageIndex.None);
        self.childIndex.asObservable();
        //
        self.childLoaded = new BehaviorSubject<ChildPage>(ChildPage.None);
        self.childLoaded.asObservable();
        //
    }
    public load(page: Page) {
        this.view.next(page);
        this.viewIndex.next(EnumParse.GetPageIndex(page));
        this.router.navigate([this.list[this.viewIndex.getValue()].path]);
        this.titleService.setTitle(this.list[this.viewIndex.getValue()].title);
    }
    public complete(page: Page) {
        this.viewLoaded.next(page);
    }
    public updateSideNav(state: boolean) {
        this.sideNavIsOpen = state;
    }

    public loadChild(child: ChildPage) {
        //this.child.next(child);
        //this.childIndex.next(EnumParse.GetChildPageIndex(child));
        this.titleService.setTitle(this.childList[this.childIndex.getValue()].title);
    }
    public childComplete(child: ChildPage) {
        this.childLoaded.next(child);
    }

}