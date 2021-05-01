import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { AboutComponent } from './institutional/about/about.component';
import { ContactComponent } from './institutional/contact/contact.component';
import { AppRoutingModule } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './products/products.service';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { RegisterComponent } from './demos/reactiveForms/register/register.component';
import { NavigationModule } from './navigation/navigation.module';
import { AuthGuard } from './services/app.guard';
import { RegisterGuard } from './services/register.guard';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent,
    ListProductsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    HttpClientModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    AuthGuard,
    RegisterGuard,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
