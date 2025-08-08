import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { BuyerService } from 'src/app/buyer/services/buyer.service';
import { Buyer } from 'src/app/shared/models/buyer.model';
import { UserToken } from 'src/app/shared/models/user-token.model';

@Component({
  selector: 'app-list-buyer',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  buyer: Buyer[] = [];
  displayedColumns = ['id', 'name', 'document', 'action'];

  constructor(
    private readonly buyerService: BuyerService,
    private readonly loginService: LoginService
  ) {}

  get usuarioLogado(): UserToken | null {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {
    this.buyerService.read().subscribe((buyer: Buyer[]) => {
      this.buyer = buyer;
    });
  }
}
