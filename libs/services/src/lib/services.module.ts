import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollFlowModule } from '@ee-workspace/scrollflow';
import { DomainModule } from '@ee-workspace/domain';
import {  HttpClientModule } from '@angular/common/http';
const COMPONENTS = [
];
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule,HttpClientModule, DomainModule, ScrollFlowModule.forRoot()],
  exports: [COMPONENTS]
})
export class ServicesModule { }
