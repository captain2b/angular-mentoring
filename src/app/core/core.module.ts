import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [HeaderComponent, LogoComponent, FooterComponent, ErrorPageComponent, LoaderComponent],
  exports: [HeaderComponent, FooterComponent, ErrorPageComponent, LoaderComponent],
})
export class CoreModule { }
