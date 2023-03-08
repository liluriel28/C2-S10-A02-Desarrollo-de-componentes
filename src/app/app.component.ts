import { Component, Input } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  //imgParent = 'https://www.w3schools.com/howto/img_avatar.png';


  imgParent = '';

  products: Product[] = [
    {
      name: 'El mejor producto',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 365,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colección de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 565,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Gafas para que vayas a la playa',
      price: 23,
      image: './assets/images/glasses.jpg'
    },
    {
      name: 'Para tu mascota',
      price: 165,
      image: './assets/images/house.jpg'
    },
  ];

  onLoaded(img:string){
    console.log('log padre', img)
  }

}
