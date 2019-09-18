
import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page, ChildPageIndex } from '@ee-workspace/services';
@Component({
    selector: 'app-university',
    templateUrl: './university.component.html',
    styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
    constructor(private context: AppViewContext) { }
    ngOnInit() {
        this.context.nav.updateChild(ChildPageIndex.Home);
        this.context.complete(Page.University);
    }
}