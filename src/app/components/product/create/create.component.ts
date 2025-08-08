import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { SuppliersService } from 'src/app/suppliers/services/suppliers.service';
import { ProductService } from 'src/app/product/services/product.service';
import { Supplier } from 'src/app/shared/models/supplier.model';
import { Product } from 'src/app/shared/models/product.model';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  supplierGroup = this._formBuilder.group({
    supplierForm: ['', Validators.required],
  });
  valuesGroup = this._formBuilder.group({
    saleValue: ['', Validators.required],
    profitPercentage: ['', Validators.required],
  });
  isLinear = true;

  suppliers: Supplier[] = [];
  selectedSupplier: number | null = null;

  user: Users = {
    id: this.usuarioLogado.id,
    name: this.usuarioLogado.name,
  };

  supplier: Supplier = {
    id: null,
    name: '',
    document: '',
    address: '',
    phone: '',
    email: '',
  };

  product: Product = {
    name: '',
    price: 0,
    stockQuantity: 0,
    supplierId: 0,
  };

  constructor(
    private readonly productService: ProductService,
    private readonly loginService: LoginService,
    private readonly supplierService: SuppliersService,
    private readonly router: Router,
    private readonly _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  get usuarioLogado(): UserToken {
    return this.loginService.usuarioLogado;
  }

  loadSuppliers(): void {
    this.supplierService.read().subscribe((suppliers) => {
      this.suppliers = suppliers;
    });
  }

  createProduct(): void {
    console.log(this.product);
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Categoria criada!', false);
      this.router.navigate(['/product']);
    });
  }

  // onSupplierChange(supplierId: number): void {
  //   const selected = this.suppliers.find(
  //     (supplier) => supplier.id === supplierId
  //   );
  //   if (selected) {
  //     this.product.supplier = {
  //       id: selected.id,
  //       name: selected.name,
  //       description: selected.description,
  //     };
  //   } else {
  //     this.product.supplier = { id: null, name: '', description: '' };
  //   }
  // }

  cancel(): void {
    this.router.navigate(['/product']);
  }
}
