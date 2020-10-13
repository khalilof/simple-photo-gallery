import { Component, Input, OnInit } from '@angular/core';
import { GalleryImage } from './types/GalleryImage';

@Component({
  selector: 'kh-simple-photo-gallery',
  templateUrl: './simple-photo-gallery.component.html',
  styleUrls: ['./simple-photo-gallery.component.scss'],
})
export class SimplePhotoGalleryComponent implements OnInit {

  @Input() images: GalleryImage[];
  currentImage = 0;
  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    }
  }

  previous(): void {
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }
}
