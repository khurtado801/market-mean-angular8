import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;
  /**
   * Create constructor.
   * In the constructor we are creating a form with the validation rules
   */
  constructor(
    private fb: FormBuilder,
    private ps: ProductsService
  ) {
    this.createForm(); // Call to createForm
  }

  /**
   * Reactive form definition, create FormGroup and instantiate
   * the FormBuilder (in our case 'fb'). So in the constructor we are
   * creating a form with the validation rules.
   * The constructor of this class takes the object
   * that can contain sub-form-groups and FormControls.
   */
  createForm() {
    /**
     * We use form builder to validate all the validation.
     * The form has three fields and we validate for no
     * empty inputs. If input is empty throw error and display
     * the error.
     */
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }

  /**
   * addProduct dmethod efinition
   */
  addProduct(ProductName, ProductDescription, ProductPrice) {
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice);
  }

  ngOnInit() {
  }

}
