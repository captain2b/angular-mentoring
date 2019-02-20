import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserEntityComponent } from './user-entity/user-entity.component';
import { CoursesModule } from './courses/courses.module';
import { AppRoutingModule } from './app-routing.module';
import { CoursesService } from './services/courses.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationModule } from './authorization/authorization.module';
import { FormsModule } from '@angular/forms';
import { CanActivateGuard } from './guards/can-activate-guard';

@NgModule({
  declarations: [
    AppComponent,
    UserEntityComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    CoursesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthorizationModule,
    FormsModule,
  ],
  exports: [
    SharedModule,
  ],
  providers: [CoursesService, CanActivateGuard],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
})
export class AppModule { }
