import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}
    
    protected UrlServiceV1: string = "http://localhost:3000/";

    getProducts(status: string) : Observable<Product []> {
        if (status === 'onDeal') {
            return this.http.get<Product[]>(this.UrlServiceV1 + "products?onDeal=true")            
        }

        return this.http.get<Product[]>(this.UrlServiceV1 + "products")
    }

    getById(id: number) : Observable<Product> {
        return this.http.get<Product>(this.UrlServiceV1 + "products/" + id)
    }
}