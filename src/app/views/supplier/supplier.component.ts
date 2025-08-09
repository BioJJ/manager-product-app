import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Fornecedores',
      icon: 'real_estate_agent',
      routeUrl: '/suppliers',
    };
  }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  navigateToPropertyCreate(): void {
    this.router.navigate(['/suppliers/create']);
  }
}
