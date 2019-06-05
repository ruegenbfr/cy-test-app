import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { TracingViewModule } from './tracing-view/tracing-view.module';
// import { DatatableComponent } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // DatatableComponent,
    TracingViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
