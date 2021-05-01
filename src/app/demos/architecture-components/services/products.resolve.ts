import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Product } from "../models/product";
import { ProductService } from "./products.service";

@Injectable()
export class ProductsResolve implements Resolve<Product[]> {

    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.productService.getProducts(route.params.status);
    }

}