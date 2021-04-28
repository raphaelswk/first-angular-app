import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductCardDetailComponent } from "./components/product-card-detail.component";
import { ProductsCountComponent } from "./components/product-count.component";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { ProductRoutingModule } from "./product.route";
import { ProductService } from "./services/products.service";

@NgModule({
    declarations: [
        ProductDashboardComponent,
        ProductCardDetailComponent,
        ProductsCountComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule{}