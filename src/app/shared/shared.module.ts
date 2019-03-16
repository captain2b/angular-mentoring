import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { DateControlComponent } from './date-control/date-control.component';
import { DurationControlComponent } from './duration-control/duration-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [SearchComponent, BreadcrumbsComponent, ButtonComponent, DateControlComponent, DurationControlComponent],
  exports: [SearchComponent, BreadcrumbsComponent, ButtonComponent, DurationControlComponent, DateControlComponent],
})
export class SharedModule { }
