
import { Component, OnInit } from '@angular/core';
import { AppViewContext, ChildPage } from '@ee-workspace/services';
import { ICatalogItem, Results, Catalog } from '@ee-workspace/domain';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'
import { DialogContentComponent } from './dialog-content.component';
import { Router } from '@angular/router';
@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
    constructor(public context: AppViewContext, public dialog: MatDialog, private router: Router) {
    }
    ngOnInit() {
        this.context.childComplete(ChildPage.Catalog);
        //this.context.childComplete(ChildPage.Catalog);        
        const self = this;
        self.context.dataContext.dispatch.subscribe((arg: boolean) => {
            if (arg === true) {
                console.log("yes!");
            }
        });
        self.context.dataContext.load();
    }
    onClick(id: number) {
        this.context.dataContext.selectedIndex.next(id);
        this.router.navigate(["./university/catalog/" + id.toString()]);
    }
}