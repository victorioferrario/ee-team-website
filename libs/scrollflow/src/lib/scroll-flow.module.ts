import { NgModule, ModuleWithProviders } from '@angular/core';
import { ScrollToDirective } from './scroll-to.directive';
import { ScrollToService } from './scroll-to.service';

/** Scroll To Module */
@NgModule({
  declarations: [
    ScrollToDirective
  ],
  exports: [
    ScrollToDirective
  ]
})
export class ScrollFlowModule {

  /**
   * Guaranteed singletons for provided Services across App.
   *
   * @return          An Angular Module with Providers
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ScrollFlowModule,
      providers: [
        ScrollToService
      ]
    };
  }
}
