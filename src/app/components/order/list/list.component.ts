import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { OrderService } from 'src/app/order/services/order.service';
import { Order } from 'src/app/shared/models/order.model';
import { UserToken } from 'src/app/shared/models/user-token.model';

@Component({
  selector: 'app-list-order',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  order: Order[] = [];
  displayedColumns = ['id', 'buyerName', 'supplierName', 'status', 'action'];

  constructor(
    private readonly orderService: OrderService,
    private readonly loginService: LoginService
  ) {}

  get usuarioLogado(): UserToken | null {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {
    this.orderService.read().subscribe((order: Order[]) => {
      this.order = order;
    });
  }
}
