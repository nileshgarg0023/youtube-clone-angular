import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { IconModule } from '../../../shared/components/icon/icon.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, IconModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}