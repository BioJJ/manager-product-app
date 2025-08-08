import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { SuppliersService } from 'src/app/suppliers/services/suppliers.service';
import { Supplier } from 'src/app/shared/models/supplier.model';
import { UserToken } from 'src/app/shared/models/user-token.model';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  supplier: Supplier[] = [];
  displayedColumns = ['id', 'name', 'document', 'action'];

  constructor(
    private readonly supplierService: SuppliersService,
    private readonly loginService: LoginService
  ) {}

  get usuarioLogado(): UserToken | null {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {
    this.supplierService.read().subscribe((supplier) => {
      this.supplier = supplier;
    });
  }
}
