import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { FileProvider } from './sidebar/file.provider';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    MatTooltipModule,
    MatSidenavModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    BrowserModule
  ],
  providers: [FileProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
