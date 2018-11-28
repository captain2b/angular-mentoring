import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SearchComponent, BreadcrumbsComponent, ButtonComponent],
  exports: [SearchComponent, BreadcrumbsComponent, ButtonComponent],
})
export class SharedModule { }
