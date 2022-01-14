import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IconModule } from '../../shared/components/icon/icon.module';
import { VideoModule } from '../../shared/components/video/video.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, IconModule, VideoModule],
  exports: [HomeComponent],
})
export class HomeModule {}