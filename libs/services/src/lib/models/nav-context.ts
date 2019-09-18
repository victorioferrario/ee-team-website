import { PageIndex, ChildPageIndex } from './enums';
import { BehaviorSubject } from 'rxjs';

export interface INavData {
    labelCssRegular: string;
    labelCssActive: string;
}
export interface INavDataEE {
    buttonLabelHome: BehaviorSubject<string>;
    buttonLabelTeam: BehaviorSubject<string>;
    buttonLabelUpdates: BehaviorSubject<string>;
    buttonLabelResources: BehaviorSubject<string>;
    buttonLabelUniversity: BehaviorSubject<string>;
}
export class NavDataEE implements INavData, INavDataEE {
    labelCssRegular = 'regular';
    labelCssActive = 'active-label';
    buttonLabelHome: BehaviorSubject<string>;
    buttonLabelTeam: BehaviorSubject<string>;
    buttonLabelUpdates: BehaviorSubject<string>;
    buttonLabelResources: BehaviorSubject<string>;
    buttonLabelUniversity: BehaviorSubject<string>;
    constructor() {
        const self = this;
        self.buttonLabelHome = new BehaviorSubject<string>(self.labelCssRegular);
        self.buttonLabelHome.asObservable();
        //
        self.buttonLabelTeam = new BehaviorSubject<string>(self.labelCssRegular);
        self.buttonLabelTeam.asObservable();
        //
        self.buttonLabelUpdates = new BehaviorSubject<string>(self.labelCssRegular);
        self.buttonLabelUpdates.asObservable();
        //
        self.buttonLabelResources = new BehaviorSubject<string>(self.labelCssRegular);
        self.buttonLabelResources.asObservable();
        //
        self.buttonLabelUniversity = new BehaviorSubject<string>(self.labelCssRegular);
        self.buttonLabelUniversity.asObservable();
    }
}
export interface INavDataEU {
    buttonLabelHome: BehaviorSubject<string>;
    buttonLabelAbout: BehaviorSubject<string>;
    buttonLabelCatalog: BehaviorSubject<string>;
}
export class NavDataEU implements INavData, INavDataEU {
    labelCssRegular = 'regular';
    labelCssActive = 'active-label';
    buttonLabelHome: BehaviorSubject<string>;
    buttonLabelAbout: BehaviorSubject<string>;
    buttonLabelCatalog: BehaviorSubject<string>;
    constructor() {
        const self = this;
        //
        self.buttonLabelHome = new BehaviorSubject<string>(self.labelCssRegular);
        self.buttonLabelHome.asObservable();
        //
        self.buttonLabelAbout = new BehaviorSubject<string>(self.labelCssRegular);
        self.buttonLabelAbout.asObservable();
        //
        self.buttonLabelCatalog = new BehaviorSubject<string>(self.labelCssRegular);
        self.buttonLabelCatalog.asObservable();
    }
}
export interface INavContext {
    ee: NavDataEE;
    eu: NavDataEU;
    isTemplateEE: BehaviorSubject<boolean>;
    isTemplateEU: BehaviorSubject<boolean>;
    reset(): boolean;
    update(pageIndex: PageIndex): void;
}
export class NavContext implements INavContext {
    ee: NavDataEE;
    eu: NavDataEU;
    isTemplateEE: BehaviorSubject<boolean>;
    isTemplateEU: BehaviorSubject<boolean>;
    constructor() {
        const self = this;
        self.ee = new NavDataEE();
        self.eu = new NavDataEU();
        //
        self.isTemplateEE = new BehaviorSubject<boolean>(true);
        self.isTemplateEE.asObservable();
        //
        self.isTemplateEU = new BehaviorSubject<boolean>(false);
        self.isTemplateEU.asObservable();
    }
    update(pageIndex: PageIndex) {
        const self = this;
        if (self.reset()) {
            switch (pageIndex) {
                case PageIndex.Home:
                    self.isTemplateEU.next(false);
                    self.isTemplateEE.next(true);
                    self.ee.buttonLabelHome.next(self.ee.labelCssActive);
                    break;
                case PageIndex.Resources:
                    self.ee.buttonLabelResources.next(self.ee.labelCssActive);
                    break;
                case PageIndex.Team:
                    self.ee.buttonLabelTeam.next(self.ee.labelCssActive);
                    break;
                case PageIndex.University:
                    self.isTemplateEU.next(true);
                    self.isTemplateEE.next(false);
                    self.ee.buttonLabelUniversity.next(self.ee.labelCssActive);
                    break;
                case PageIndex.Updates:
                    self.ee.buttonLabelUpdates.next(self.ee.labelCssActive);
                    break;
            }
        }
    }
    updateChild(childIndex: ChildPageIndex) {
        const self = this;
        if (self.resetChild()) {
            switch (childIndex) {
                case ChildPageIndex.Home:
                    self.isTemplateEE.next(false);
                    self.isTemplateEU.next(true);
                    self.eu.buttonLabelHome.next(self.eu.labelCssActive);
                    break;
                case ChildPageIndex.Catalog:
                    self.isTemplateEE.next(false);
                    self.isTemplateEU.next(true);
                    self.eu.buttonLabelCatalog.next(self.eu.labelCssActive);
                    break;
                case ChildPageIndex.About:
                    self.isTemplateEE.next(false);
                    self.isTemplateEU.next(true);
                    self.eu.buttonLabelAbout.next(self.eu.labelCssActive);
                    break;
            }
        }
    }
    reset(): boolean {
        const self = this;
        self.ee.buttonLabelHome.next(self.ee.labelCssRegular);
        self.ee.buttonLabelTeam.next(self.ee.labelCssRegular);
        self.ee.buttonLabelUpdates.next(self.ee.labelCssRegular);
        self.ee.buttonLabelResources.next(self.ee.labelCssRegular);
        self.ee.buttonLabelUniversity.next(self.ee.labelCssRegular);
        return true;
    }
    resetChild(): boolean {
        const self = this;
        self.eu.buttonLabelHome.next(self.ee.labelCssRegular);
        self.eu.buttonLabelAbout.next(self.ee.labelCssRegular);
        self.eu.buttonLabelCatalog.next(self.ee.labelCssRegular);
        return true;
    }
}