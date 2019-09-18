import { Component, OnInit, HostBinding } from '@angular/core';
import { AppViewContext, PageState, Page } from '@ee-workspace/services';

@Component({
    selector: 'fab-ink-bar',
    template: `<ng-container></ng-container>`,
    styles: [
        `
      :host {
        background-color: #2196F3;
        position: absolute;
        bottom: -1px;
        height: 2px;
        transition: all 0.2s cubic-bezier(0.35, 0, 0.25, 1);
      }
    `
    ]
})
export class InkBarComponent implements OnInit {
    @HostBinding('style.left.px')
    left: number;
    @HostBinding('style.right.px')
    right: number;
    @HostBinding('style.width.px')
    width: number;
    constructor(private context: AppViewContext) {
        const self = this;
    }
    ngOnInit() {
        const self = this;
        self.context.dispatch.subscribe((state: PageState) => {

            self.left = state.ink.left;
            self.width = state.ink.width;

        });
    }
}