import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppViewContext, Page } from '@ee-workspace/services';
@Component({
    selector: 'app-university-main',
    template: `
     <div class="card-body" style="display:none;">
                <h6 class="card-title">Check Balance</h6>
                <ul class="nav">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            [routerLink]="'catalog'"
                            routerLinkActive="active"
                        >
                            Casual
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            [routerLink]="'about'"
                            routerLinkActive="active"
                        >
                            Casual
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            [routerLink]="'catalog-item-details'"
                            routerLinkActive="active"
                        >
                            catalog-detail
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            [routerLink]="'home'"
                            routerLinkActive="active"
                        >
                            Bad Link
                        </a>
                    </li>
                </ul>
            </div>
            <router-outlet></router-outlet> 
     `
})
export class UniversityMainComponent implements OnInit {
    constructor(public router: Router, public context: AppViewContext) {
        //this.context.initializeSub(this.router);
    }
    ngOnInit() {
        const self = this;
        console.log(self.router.url);
    }

    // this.router.navigate([this.list[this.viewIndex.getValue()].path]);
}