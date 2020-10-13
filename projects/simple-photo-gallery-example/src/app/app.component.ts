import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '@khalilof/simple-photo-gallery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: GalleryImage[];

  ngOnInit(): void {
    this.images = [
      {
        description: 'Major river in South America',
        label: 'Amazon River',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon_CIAT_%282%29.jpg/1920px-Amazon_CIAT_%282%29.jpg',
      },
      {
        description: 'Spiral Galaxy in the Local Group',
        label: 'Andromeda Galaxy',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg',
      },
      {
        description: 'The Greatest Desert: is a desert located on the African continent',
        label: 'Sahara',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Libya_4985_Tadrart_Acacus_Luca_Galuzzi_2007.jpg/1920px-Libya_4985_Tadrart_Acacus_Luca_Galuzzi_2007.jpg',
      },
      {
        description: 'Is a salt lake bordering Jordan and Israel',
        label: 'Dead Sea',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dead_Sea_Halite_View_031712.jpg/1920px-Dead_Sea_Halite_View_031712.jpg',
      },
      {
        description: 'Is a snow-capped and dormant compound volcano',
        label: 'Mount Ararat',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mount_Ararat_and_the_Yerevan_skyline_in_spring_%2850mm%29.jpg/1920px-Mount_Ararat_and_the_Yerevan_skyline_in_spring_%2850mm%29.jpg',
      },
    ];
  }
}
