import { Component, OnInit, Input } from '@angular/core';
import { AppViewContext, Page, PageIndex, EnumParse } from '@ee-workspace/services';

@Component({
    selector: 'fab-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
    cssTemplate: string;

    @Input()
    Title: string;
    constructor(public context: AppViewContext) {

    }
    ngOnInit() {
        this.cssTemplate = this.context.nav.isTemplateEE.value ? "ee" : "eu";
    }
}
