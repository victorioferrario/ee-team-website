import { NgModule } from '@angular/core';
import { FabricModule, MaterialModule } from '@ee-workspace/fabric';
/**
 * @type: LOCAL_COMPONENTS
 */
import { UpdatesRoutingModule } from './updates/updates.routing.module';
import { UpdatesComponent } from './updates/components/updates.component';
export const LOCAL_COMPONENTS = [
    UpdatesComponent];
@NgModule({
    imports: [
        FabricModule,
        MaterialModule,
        UpdatesRoutingModule
    ],
    providers: [],
    declarations: [LOCAL_COMPONENTS],
    entryComponents: [],
    exports: [LOCAL_COMPONENTS]
})
export class UpdatesModule { }