// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// /**
//  * @description : local hook
//  */

// import { UniversityComponent } from './components/university.component';
// import { UniversityMainComponent as MainComponent } from './components/university-main.component';
// const routes: Routes = [
//     {
//         path: '',
//         component: MainComponent,
//         children: [{
//             path: 'home',
//             component: UniversityComponent
//         },
//         {
//             path: 'catalog',
//             component: CatalogComponent
//         }
//         ]
//     }
// ];
// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class UniversityRoutingModule { }