import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  product : Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.productService.getById(params['id'])
            .subscribe(product => {
              this.product = product;
            });
      });
  }

  save(): void {
    
  }
}
