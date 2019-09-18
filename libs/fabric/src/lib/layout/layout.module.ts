
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { InkBarComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
const COMPONENTS = [
    MainComponent,
    ShellComponent,
    HeaderComponent,
    FooterComponent,
    InkBarComponent,
    TitleComponent
];
@NgModule({
    declarations: [COMPONENTS],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [COMPONENTS]
})
export class LayoutModule { }
