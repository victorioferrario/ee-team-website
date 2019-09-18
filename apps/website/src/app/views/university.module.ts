import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule, MaterialModule } from '@ee-workspace/fabric';
import { Routes, RouterModule } from '@angular/router';
/**
 * @type: LOCAL_COMPONENTS
 */
import { AboutComponent } from './university/components/about/about.component';
import { CatalogComponent } from './university/components/catalog/catalog.component';
import { CatalogDetailComponent } from './university/components/catalog-detail/catalog-detail.component';
import { UniversityComponent } from './university/components/university/university.component';
import { UniversityMainComponent } from './university/components/university-main.component';
import { DialogContentComponent } from './university/components/catalog/dialog-content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedPipesModule } from '../shared/pipes/shared-pipe.module';
const UNIVERSITY_ROUTES: Routes = [
    {
        path: '',
        component: UniversityMainComponent,
        children: [{
            path: 'home',
            component: UniversityComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'catalog',
            component: CatalogComponent,
            pathMatch: 'full'
        },
        {
            path: 'catalog/:id',
            component: CatalogDetailComponent
        },
        {
            path: 'catalog-item-viewer',
            component: CatalogDetailComponent,
            pathMatch: 'full'
        },
        {
            path: '', redirectTo: 'home', pathMatch: 'full'
        },
        ]
    }
];
export const LOCAL_COMPONENTS = [DialogContentComponent, UniversityMainComponent, AboutComponent,
    UniversityComponent, CatalogComponent, CatalogDetailComponent];
@NgModule({
    imports: [
        CommonModule,
        FabricModule,
        SharedPipesModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule.forChild(UNIVERSITY_ROUTES)
    ],
    providers: [],
    declarations: [LOCAL_COMPONENTS],
    entryComponents: [DialogContentComponent],
    exports: [LOCAL_COMPONENTS]
})
export class UniversityModule { }