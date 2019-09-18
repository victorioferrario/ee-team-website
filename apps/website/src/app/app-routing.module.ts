import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        loadChildren: './views/dashboard.module#DashboardModule'
    },
    {
        path: 'team',
        loadChildren: './views/team.module#TeamModule'
    },
    {
        path: 'updates',
        loadChildren: './views/updates.module#UpdatesModule'
    },
    {
        path: 'resources',
        loadChildren: './views/resources.module#ResourcesModule'
    },
    {
        path: 'university',
        loadChildren: () => import('./views/university.module').then(mod => mod.UniversityModule)
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
            initialNavigation: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }