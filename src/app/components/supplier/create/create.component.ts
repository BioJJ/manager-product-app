import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { SuppliersService } from 'src/app/suppliers/services/suppliers.service';
import { Supplier } from 'src/app/shared/models/supplier.model';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  user: Users = {
    id: this.usuarioLogado.id,
  };

  supplier: Supplier = {
    name: '',
    id: null,
    document: '',
    address: '',
    phone: '',
    email: '',
  };

  constructor(
    private readonly supplierService: SuppliersService,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  get usuarioLogado(): UserToken {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {
    // this.supplier.user.id = this.usuarioLogado.id;
  }

  createProperty(): void {
    this.supplierService.create(this.supplier).subscribe(() => {
      this.supplierService.showMessage('Fornecedor criada!');
      this.router.navigate(['/suppliers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/suppliers']);
  }
}
