import { ChildPage, Page } from './enums/Page';
import { Load } from './enums/Load';
import { IPageInkState } from './IPageInkState';
export interface IPageState {
    view: Page;
    load: Load;
    index: number;
}
export class PageState implements IPageState {
    view: Page;
    load: Load;
    index: number;
    ink: IPageInkState;
    constructor(
        newLoad: Load,
        newPage: Page,
        newIndex: number,
        newInk: IPageInkState
    ) {
        this.load = newLoad;
        this.view = newPage;
        this.index = newIndex;
        this.ink = newInk;
    }
}
export interface IChildPageState {
    view: ChildPage;
    load: Load;
    index: number;
}
export class ChildPageState implements IChildPageState {
    view: ChildPage;
    load: Load;
    index: number;
    ink: IPageInkState;
    constructor(
        newLoad: Load,
        newChildPage: ChildPage,
        newIndex: number,
        newInk: IPageInkState
    ) {
        this.load = newLoad;
        this.view = newChildPage;
        this.index = newIndex;
        this.ink = newInk;
    }
}