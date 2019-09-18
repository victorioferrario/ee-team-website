import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * @description : local hook
 */
import { UpdatesComponent } from './components/updates.component';

const routes: Routes = [
    {
        path: '',
        component: UpdatesComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdatesRoutingModule { }