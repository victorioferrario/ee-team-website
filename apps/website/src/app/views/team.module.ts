import { NgModule } from '@angular/core';
import { FabricModule, MaterialModule } from '@ee-workspace/fabric';
/**
 * @type: LOCAL_COMPONENTS
 */
import { TeamRoutingModule } from './team/team.routing.module';
import { TeamComponent } from './team/components/team.component';
export const LOCAL_COMPONENTS = [
    TeamComponent];
@NgModule({
    imports: [
        FabricModule,
        MaterialModule,
        TeamRoutingModule
    ],
    providers: [],
    declarations: [LOCAL_COMPONENTS],
    entryComponents: [],
    exports: [LOCAL_COMPONENTS]
})
export class TeamModule { }