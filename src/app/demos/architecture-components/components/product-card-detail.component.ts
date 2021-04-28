import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../models/product";

@Component({
    selector: 'product-card-detail',
    templateUrl: './product-card-detail.component.html'
})
export class ProductCardDetailComponent {
    @Input()
    product: Product;

    @Output()
    onDeal: EventEmitter<any> = new EventEmitter();

    raiseEvent() {
        this.onDeal.emit(this.product);
    }
}