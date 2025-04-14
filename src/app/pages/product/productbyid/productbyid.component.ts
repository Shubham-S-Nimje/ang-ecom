import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';

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
  selector: 'app-productbyid',
  standalone: false,
  templateUrl: './productbyid.component.html',
  styleUrl: './productbyid.component.css',
})
export class ProductbyidComponent {
  productDetails: any = [];
  productsByCatId: Product[] = [];

  constructor(
    private product: ProductsService,
    private params: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.params.paramMap.subscribe((params) => {
      const productId = params.get('productId');
      // console.log(productId);

      if (productId) {
        this.product.getProductById(productId).subscribe((product: any) => {
          this.productDetails = product?.data;
          // console.log(product);
        });
        if (this.productDetails?.categoryId) {
          this.product
            .getProductByCatId(this.productDetails?.categoryId)
            .subscribe((products: any) => {
              this.productsByCatId = products?.data;
              console.log(products);
            });
        }
      }
    });
  }
}
