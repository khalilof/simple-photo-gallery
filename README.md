# Simple Photo Gallery

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.14.

## Installation
`npm install @khalilof/simple-photo-gallery --save`

## Usage

````ts
// app.module.ts
import { SimplePhotoGalleryModule } from '@khalilof/simple-photo-gallery';

...
@NgModule({
    imports: [
        ...
        SimplePhotoGalleryModule
        ...
    ],
    ...
})
export class AppModule { }
````

````ts
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '@khalilof/simple-photo-gallery';
...

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
     images: GalleryImage[];

    ngOnInit(): void {
        this.galleryImages = [
                 {
                   description: 'This is image 1 description',
                   label: 'first Image label',
                   image: 'image1URL.jpg',
                 },
                {
                   description: 'This is image 2 description',
                   label: 'second Image label',
                   image: 'image2URL.jpg',
                 },
                {
                   description: 'This is image 3 description',
                   label: 'third Image label',
                   image: 'image3URL.jpg',
                 },
        ];
    }
}

````

````html
// app.component.html
<kh-simple-photo-gallery [images]="images"></kh-simple-photo-gallery>
````

## Demo

[DEMO](https://angular-simple-photo-gallery-example.stackblitz.io)
