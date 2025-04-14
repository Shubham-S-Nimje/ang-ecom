import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

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
  selector: 'app-categorybyid',
  standalone: false,
  templateUrl: './categorybyid.component.html',
  styleUrl: './categorybyid.component.css',
})
export class CategorybyidComponent {
  productsByCatId: Product[] = [];

  constructor(
    private product: ProductsService,
    private params: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.params.paramMap.subscribe((params) => {
      const categoryId = params.get('categoryId');
      // console.log(categoryId);

      if (categoryId) {
        this.product
          .getProductByCatId(categoryId)
          .subscribe((products: any) => {
            this.productsByCatId = products?.data;
            console.log(products);
          });
      }
    });
  }
}
