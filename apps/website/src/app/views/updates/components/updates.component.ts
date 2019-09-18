import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@ee-workspace/services';
@Component({
    selector: 'app-updates',
    templateUrl: './updates.component.html',
    styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
    constructor(private context: AppViewContext) { }
    ngOnInit() {
        this.context.complete(Page.Updates);
    }
}