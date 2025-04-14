import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

interface Product {
  productId: string;
  categoryId: string;
  productImageUrl: string;
  categoryName: string;
  productName: string;
  productPrice: number;
  deliveryTimeSpan: string;
}

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: Product[] = [];

  constructor(private cat: CategoriesService) {}

  ngOnInit(): void {
    this.cat.getCategories().subscribe((category: any) => {
      this.categories = category?.data;
      // console.log(category);
    });
  }
}
