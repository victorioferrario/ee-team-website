import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * @description : local hook
 */
import { TeamComponent } from './components/team.component';

const routes: Routes = [
    {
        path: '',
        component: TeamComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule { }