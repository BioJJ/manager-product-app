import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Pedidos',
      icon: 'shopping_cart',
      routeUrl: '/orders',
    };
  }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  navigateToPropertyCreate(): void {
    this.router.navigate(['/orders/create']);
  }
}
