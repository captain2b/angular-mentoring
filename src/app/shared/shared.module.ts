import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { DateControlComponent } from './date-control/date-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [SearchComponent, BreadcrumbsComponent, ButtonComponent, DateControlComponent],
  exports: [SearchComponent, BreadcrumbsComponent, ButtonComponent],
})
export class SharedModule { }
