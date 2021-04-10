import { Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { AboutComponent } from "./institutional/about/about.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { HomeComponent } from "./navigation/home/home.component";
import { ListProductsComponent } from "./products/list-products/list-products.component";

export const rootRouteConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'products', component: ListProductsComponent },
    { path: 'product-details/:id', component: ListProductsComponent },
];