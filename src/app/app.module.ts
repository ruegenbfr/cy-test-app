import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TracingViewModule } from './tracing-view/tracing-view.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    TracingViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
