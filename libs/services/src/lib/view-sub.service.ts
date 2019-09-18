import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPageState, Load, EnumParse, NavContext, Page, PageState, ViewContext } from './models';
import { Title } from '@angular/platform-browser';
import { ScrollToService, ScrollToConfigOptions } from '@ee-workspace/scrollflow';
import { AppViewContext } from './view-context.service';
@Injectable()
export class AppSubViewContext {
    subRouter: Router;
    constructor(
        private refRouter: Router,
        private appViewContext: AppViewContext) {
    }
    public activateRoute(router: Router) {
        const self = this;
        self.subRouter = router;
    }
}