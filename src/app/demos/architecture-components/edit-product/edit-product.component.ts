import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  product : Product;

  constructor(private route: ActivatedRoute, 
              private productService: ProductService,
              private router: Router) {
  }

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
    this.router.navigate(['/products-dashboard']);
    // this.router.navigateByUrl('/products-dashboard'); // RENDERS THE PAGE AGAIN, NOT RECCOMENDED
  }
}
