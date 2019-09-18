import { NgModule } from '@angular/core';
import { FabricModule, MaterialModule } from '@ee-workspace/fabric';
/**
 * @type: LOCAL_COMPONENTS
 */
import { DashboardRoutingModule } from './dashboard/dashboard.routing.module';
import { DashboardComponent } from './dashboard/components/dashboard.component';
export const LOCAL_COMPONENTS = [
    DashboardComponent];
@NgModule({
    imports: [
        FabricModule,
        MaterialModule,
        DashboardRoutingModule
    ],
    providers: [],
    declarations: [LOCAL_COMPONENTS],
    entryComponents: [],
    exports: [LOCAL_COMPONENTS]
})
export class DashboardModule { }