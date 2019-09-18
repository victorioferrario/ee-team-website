import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FabricModule, MaterialModule, LayoutModule } from '@ee-workspace/fabric';
import { AppViewContext, ServicesModule } from '@ee-workspace/services';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    FabricModule, MaterialModule, LayoutModule, ServicesModule
  ],
  providers: [Title, AppViewContext],
  bootstrap: [AppComponent]
})
export class AppModule { }
