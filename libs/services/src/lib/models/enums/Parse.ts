import { Page, ChildPage } from './Page';
import { PageIndex, ChildPageIndex } from './PageIndex';
import { IPageInkState } from '../IPageInkState';
import { PageInkPosition, PageInkWidth } from './PageInkPosition';
export class EnumParse {
    public static GetPageIndex(page: Page): PageIndex {
        switch (page) {
            case Page.Home: {
                return PageIndex.Home;
            }
            case Page.Team: {
                return PageIndex.Team;
            }
            case Page.Updates: {
                return PageIndex.Updates;
            }
            case Page.PageNotFound: {
                return PageIndex.PageNotFound;
            }
            case Page.Resources: {
                return PageIndex.Resources;
            }
            case Page.University: {
                return PageIndex.University;
            }
        }
    }
    public static GetChildPageIndex(child: ChildPage): ChildPageIndex {
        console.log(child)
        switch (child) {
            case ChildPage.Home: {
                return ChildPageIndex.Home;
            }
            case ChildPage.About: {
                return ChildPageIndex.About;
            }
            case ChildPage.Catalog: {
                return ChildPageIndex.Catalog;
            }
            case ChildPage.None: {
                return ChildPageIndex.None;
            }
        }
    }
    public static GetChildPageByPageIndex(child: ChildPageIndex): ChildPage {
        switch (child) {
            case ChildPageIndex.Home: {
                return ChildPage.Home;
            }
            case ChildPageIndex.Catalog: {
                return ChildPage.Catalog;
            }
            case ChildPageIndex.About: {
                return ChildPage.About;
            }
            case ChildPageIndex.CatalogItemDetail: {
                return ChildPage.CatalogItemDetail;
            }
            case ChildPageIndex.CatalogItemViewer: {
                return ChildPage.CatalogItemViewer;
            }
        }
    }
    public static GetPageByPageIndex(page: PageIndex): Page {
        switch (page) {
            case PageIndex.Home: {
                return Page.Home;
            }
            case PageIndex.Team: {
                return Page.Team;
            }
            case PageIndex.Updates: {
                return Page.Updates;
            }
            case PageIndex.PageNotFound: {
                return Page.PageNotFound;
            }
            case PageIndex.Resources: {
                return Page.Resources;
            }
            case PageIndex.University: {
                return Page.University;
            }
        }
    }
    public static GetChildPageInkState(child: ChildPage): IPageInkState {
        return {
            width: 0,
            left: 0
        };
    }
    public static GetPageInkState(page: Page): IPageInkState {
        switch (page) {
            case Page.Home: {
                return {
                    width: PageInkWidth.Home,
                    left: PageInkPosition.Home
                };
            }
            case Page.Team: {
                return {
                    width: PageInkWidth.Team,
                    left: PageInkPosition.Team
                };
            }
            case Page.Updates: {
                return {
                    width: PageInkWidth.Updates,
                    left: PageInkPosition.Updates
                };
            }
            case Page.Resources: {
                return {
                    width: PageInkWidth.Resources,
                    left: PageInkPosition.Resources
                };
            }
            case Page.University: {
                return {
                    width: PageInkWidth.University,
                    left: PageInkPosition.University
                };
            }
        }
    }
}