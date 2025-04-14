import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  carouselImgs: any = [
    '/carousel-img-1.jpg',
    '/carousel-img-2.jpeg',
    '/carousel-img-3.jpeg',
    '/carousel-img-4.jpg',
    '/carousel-img-5.jpg',
  ];
  slideIndex = 0;

  ngOnInit() {
    setInterval(() => {
      if (this.slideIndex === 4) {
        this.slideIndex = 0;
      } else {
        this.slideIndex++;
      }
    }, 2000);
  }
}
