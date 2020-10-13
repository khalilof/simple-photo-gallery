import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimplePhotoGalleryModule } from '@khalilof/simple-photo-gallery';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimplePhotoGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
