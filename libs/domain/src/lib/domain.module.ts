import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataContextService} from './data-context.service';
@NgModule({
  imports: [CommonModule],
  providers:[DataContextService]
})
export class DomainModule {}
