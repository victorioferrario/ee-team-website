import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * @description : local hook
 */
import { ResourcesComponent } from './components/resources.component';

const routes: Routes = [
    {
        path: '',
        component: ResourcesComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResourcesRoutingModule { }