import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppViewContext,ChildPage, Page, PageIndex, EnumParse } from '@ee-workspace/services';
import { BehaviorSubject } from 'rxjs';
@Component({
    selector: 'fab-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    @ViewChild('scrollViewPort', { static: true })
    scrollViewPort: ElementRef;
    cssTemplate: BehaviorSubject<string>;
    constructor(
        public context: AppViewContext) {
    }
    ngOnInit() {
        this.context.initScroll(this.scrollViewPort);
        this.cssTemplate = new BehaviorSubject<string>("ee");
        this.context.nav.isTemplateEE.subscribe(data => {
            this.cssTemplate.next(!data ? "eu" : "ee");
        });
    }
    protected onClick(arg: number) {
        const self = this;
        self.handleNavigationBar(EnumParse.GetPageByPageIndex(arg));
    }    
    protected handleNavigationBar(page: Page) {
        const self = this;
        self.context.scroll();
        self.context.load(page);
        self.context.page.updateSideNav(false);
    }
    protected onClickChild(arg: number) {
        const self = this;              
        self.handleChildNavigationBar(EnumParse.GetChildPageByPageIndex(arg));
        return false;
    }
    protected handleChildNavigationBar(child: ChildPage) {
        const self = this;
        self.context.scroll();
        self.context.page.updateSideNav(false);  
        self.context.nav.updateChild(EnumParse.GetChildPageIndex(child));        
    }
}