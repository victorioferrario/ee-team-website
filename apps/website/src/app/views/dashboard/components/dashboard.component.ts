import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@ee-workspace/services';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(private context: AppViewContext) { }
    ngOnInit() {
        this.context.complete(Page.Home);
    }
}