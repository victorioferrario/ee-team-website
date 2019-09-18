import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@ee-workspace/services';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    constructor(private context: AppViewContext) { }
    ngOnInit() {
        this.context.complete(Page.Team);
    }
}