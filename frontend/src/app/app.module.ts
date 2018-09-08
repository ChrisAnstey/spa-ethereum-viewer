import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockDetailComponent } from './block-detail/block-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    BlockDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
