import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorizationComponent } from './authorization.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,

  ],
  declarations: [
    AuthorizationComponent,
  ],
  providers: [
  ],
  exports: [AuthorizationComponent],
})
export class AuthorizationModule { }
