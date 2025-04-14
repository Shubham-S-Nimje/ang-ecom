import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

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
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productList: Product[] = [];

  constructor(private product: ProductsService) {}

  ngOnInit(): void {
    this.product.getProducts().subscribe((product: any) => {
      this.productList = product?.data;
      // console.log(category);
    });
  }
}
