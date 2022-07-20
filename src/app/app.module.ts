import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarBeltLeftComponent } from './components/navbar/navbar-belt/navbar-belt-left/navbar-belt-left.component';
import { NavbarBeltRightComponent } from './components/navbar/navbar-belt/navbar-belt-right/navbar-belt-right.component';
import { NavbarBeltSearchComponent } from './components/navbar/navbar-belt/navbar-belt-search/navbar-belt-search.component';
import { NavbarBeltContainerComponent } from './components/navbar/navbar-belt/navbar-belt-container/navbar-belt-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarBeltLeftComponent,
    NavbarBeltRightComponent,
    NavbarBeltSearchComponent,
    NavbarBeltContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
