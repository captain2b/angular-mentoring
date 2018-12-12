import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserEntityComponent } from './user-entity/user-entity.component';
import { CoursesModule } from './courses/courses.module';
import { AppRoutingModule } from './app-routing.module';

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
  ],
  exports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
