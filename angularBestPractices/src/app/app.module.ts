import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

import { AppRoutingModule } from '../app/app.routing';
import { LazyLoadComponent } from '../app/lazy-load/lazy-load.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ExampleComponent, LazyLoadComponent],
  imports: [
    BrowserModule,
    ScrollingModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
