import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Most frontend applications communicate with the backend services
 * over an HTTP protocol. Modern browsers support the two different APIs
 * for making HTTP requests: the XMLHttpRequest interface and the fetch() API.
 * The HttpClient offers a simplified client HTTP API for Angular applications
 * that rests on the XLMHttpRequest interface exposed by browsers.
 */
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

/**
 * Reactive forms is when the structure of the form
 * is defined in the code and not the HTML template.
 */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
