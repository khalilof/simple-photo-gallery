import { NgModule } from '@angular/core';
import { SimplePhotoGalleryComponent } from './simple-photo-gallery.component';
import { SafePipe } from './safe.pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SimplePhotoGalleryComponent, SafePipe],
  imports: [
    CommonModule
  ],
  exports: [SimplePhotoGalleryComponent]
})
export class SimplePhotoGalleryModule { }
