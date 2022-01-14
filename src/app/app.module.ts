import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { SidebarModule } from './core/components/sidebar/sidebar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, NavbarModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}