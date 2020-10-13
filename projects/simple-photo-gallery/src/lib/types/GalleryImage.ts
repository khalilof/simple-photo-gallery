import { SafeResourceUrl } from '@angular/platform-browser';

export interface GalleryImage {
  image?: string | SafeResourceUrl;
  description?: string;
  label?: string;
}
