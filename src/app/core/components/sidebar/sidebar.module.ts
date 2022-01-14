import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { IconModule } from '../../../shared/components/icon/icon.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, IconModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}