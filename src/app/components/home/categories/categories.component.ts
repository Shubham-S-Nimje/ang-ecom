import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';

interface Product {
  productId: string;
  productImageUrl: string;
  categoryName: string;
  productName: string;
  productPrice: number;
  deliveryTimeSpan: string;
}

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  catId: any = 68;
  productsByCatId: Product[] = [];

  constructor(private cat: CategoriesService, private prod: ProductsService) {}

  ngOnInit(): void {
    this.cat.getCategories().subscribe((category: any) => {
      this.categories = category?.data;
      // console.log(category);
    });

    this.prod.getProductByCatId(this.catId).subscribe((products: any) => {
      this.productsByCatId = products?.data;
    });
  }
}
