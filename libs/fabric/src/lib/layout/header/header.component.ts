import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AppViewContext, ChildPage, Page, EnumParse } from '@ee-workspace/services';
import { BehaviorSubject } from 'rxjs';
@Component({
    selector: 'fab-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    cssTemplate: BehaviorSubject<string>;
    isNavigationDriven: boolean;
    constructor(
        public context: AppViewContext,
        breakpointObserver: BreakpointObserver
    ) {
        this.isNavigationDriven = false;
        breakpointObserver
            .observe([Breakpoints.TabletPortrait, Breakpoints.HandsetPortrait])
            .subscribe(result => {

            });

    }
    ngOnInit() {
        this.cssTemplate = new BehaviorSubject<string>("ee");
        this.context.nav.isTemplateEE.subscribe(data => {
            this.cssTemplate.next(!data ? "eu" : "ee");
        });
    }

    onToggle() {
        this.context.page.updateSideNav(
            !this.context.page.sideNavIsOpen
        );
    }
    onClick(arg: number) {
        const self = this;
        self.isNavigationDriven = true;
        self.handleNavigationBar(EnumParse.GetPageByPageIndex(arg));
    }
    protected handleNavigationBar(page: Page) {
        const self = this;
        self.context.scroll();
        self.context.load(page);
    }
    onClickChild(arg: number) {
        const self = this;
        self.isNavigationDriven = true;
        console.log(arg);
        self.handleChildNavigationBar(EnumParse.GetChildPageByPageIndex(arg));
        return false;
    }
    protected handleChildNavigationBar(child: ChildPage) {
        const self = this;
        console.log(EnumParse.GetChildPageIndex(child));
        self.context.nav.updateChild(EnumParse.GetChildPageIndex(child));
        //self.context.scroll();
        // self.context.loadChild(child);
    }
}