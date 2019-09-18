
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ICatalogItem, Results, Catalog } from '@ee-workspace/domain';
import { AppViewContext, ChildPage } from '@ee-workspace/services';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
@Component({
    selector: 'app-catalog-detail',
    templateUrl: './catalog-detail.component.html',
    styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent implements OnInit {
    data: ICatalogItem;
    isSmallVersion: BehaviorSubject<boolean>;
    isMediumVersion: BehaviorSubject<boolean>;
    isLargeVersion: BehaviorSubject<boolean>;
    isExtraLargeVersion: BehaviorSubject<boolean>;
    url: SafeUrl;
    isCodeRepoAvailable: BehaviorSubject<boolean>;
    isDocumentationAvailable: BehaviorSubject<boolean>;
    isDetailsAvailable: BehaviorSubject<boolean>;
    constructor(private context: AppViewContext, public sanitizer: DomSanitizer, private router: Router, breakpointObserver: BreakpointObserver) {
        const self = this;
        self.isSmallVersion = new BehaviorSubject<boolean>(false);
        self.isSmallVersion.asObservable();
        self.isMediumVersion = new BehaviorSubject<boolean>(false);
        self.isMediumVersion.asObservable();
        self.isLargeVersion = new BehaviorSubject<boolean>(true);
        self.isLargeVersion.asObservable();
        self.isExtraLargeVersion = new BehaviorSubject<boolean>(false);
        self.isExtraLargeVersion.asObservable();
        breakpointObserver.observe([
            Breakpoints.HandsetLandscape,
            Breakpoints.HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                self.activateHandsetLayout(true);
            } else {
                self.activateHandsetLayout(false);
            }
        });
        self.isCodeRepoAvailable = new BehaviorSubject<boolean>(false);
        self.isCodeRepoAvailable.asObservable();
        //
        self.isDocumentationAvailable = new BehaviorSubject<boolean>(false);
        self.isDocumentationAvailable.asObservable();
        //
        self.isDetailsAvailable = new BehaviorSubject<boolean>(false);
        self.isDetailsAvailable.asObservable();
    }
    activateHandsetLayout(isSmall: boolean) {
        this.isSmallVersion.next(isSmall);
        this.isLargeVersion.next(!isSmall);
    }
    ngOnInit() {
        this.context.childComplete(ChildPage.CatalogItemDetail);
        if (!this.context.dataContext.hasData.value) {
            this.router.navigate(["./university/catalog"]);
        }
        this.initialize();
    }
    videoSize: string;
    initialize() {
        this.data = this.context.dataContext.selectedItem.value;

        this.url = `https://web.microsoftstream.com/embed/video/${this.data.video}?autoplay=true&showinfo=true`;
        this.isCodeRepoAvailable.next(this.data.code != null);
        this.isDetailsAvailable.next(true);
        this.isDocumentationAvailable.next(false);
    }
    onChangeToXL(value) {
        this.isMediumVersion.next(false);
        this.isLargeVersion.next(!value);
        this.isExtraLargeVersion.next(value);
    }
    onChangeToMedium(value) {
        this.isMediumVersion.next(value);
        this.isLargeVersion.next(!value);
        this.isExtraLargeVersion.next(false);
    }
}