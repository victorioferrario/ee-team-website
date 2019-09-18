import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@ee-workspace/services';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
    typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    constructor(private context: AppViewContext) { }
    ngOnInit() {
        this.context.complete(Page.Resources);
    }
}