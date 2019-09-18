import { NgModule } from '@angular/core';
import { SafePipe } from './safepipe';
@NgModule({
    declarations: [
        SafePipe
    ],
    exports: [
        SafePipe
    ]
})
export class SharedPipesModule {
}