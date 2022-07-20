import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavbarBeltLeftComponent } from 'src/app/components/navbar/navbar-belt/navbar-belt-left/navbar-belt-left.component';
import { NavbarBeltRightComponent } from 'src/app/components/navbar/navbar-belt/navbar-belt-right/navbar-belt-right.component';
import { NavbarBeltSearchComponent } from 'src/app/components/navbar/navbar-belt/navbar-belt-search/navbar-belt-search.component';
import { NavbarBeltContainerComponent } from 'src/app/components/navbar/navbar-belt/navbar-belt-container/navbar-belt-container.component';
import { NavbarMainComponent } from 'src/app/components/navbar/navbar-main/navbar-main.component';

import { HeroComponent } from 'src/app/components/hero/hero.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavbarBeltLeftComponent,
    NavbarBeltRightComponent,
    NavbarBeltSearchComponent,
    NavbarBeltContainerComponent,
    NavbarMainComponent,
    HeroComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
