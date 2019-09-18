import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * @description : local hook
 */
import { DashboardComponent } from './components/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }