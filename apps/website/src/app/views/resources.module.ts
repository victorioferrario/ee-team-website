import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule, MaterialModule } from '@ee-workspace/fabric';
/**
 * @type: LOCAL_COMPONENTS
 */
import { ResourcesRoutingModule } from './resources/resources.routing.module';
import { ResourcesComponent } from './resources/components/resources.component';
export const LOCAL_COMPONENTS = [
    ResourcesComponent];
@NgModule({
    imports: [
        CommonModule,
        FabricModule,
        MaterialModule,
        ResourcesRoutingModule
    ],
    providers: [],
    declarations: [LOCAL_COMPONENTS],
    entryComponents: [],
    exports: [LOCAL_COMPONENTS]
})
export class ResourcesModule { }