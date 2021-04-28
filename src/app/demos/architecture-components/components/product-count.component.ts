import { Component, Input } from "@angular/core";
import { Product } from "../models/product";

@Component({
    selector: 'product-count',
    template:
    `
    <div>
        <div>
            Products on Deal: {{ onDealProductsCounter() }} from a total of {{ getTotalProducts() }} products <br><br>
        </div>
    </div>
    `
})
export class ProductsCountComponent {
    @Input()
    products: Product[];

    getTotalProducts(): number {
        if (!this.products) return;

        return this.products.length;
    }

    onDealProductsCounter(): number {
        if (!this.products) return;

        return this.products.filter((product: Product) => product.onDeal).length;
    }
}