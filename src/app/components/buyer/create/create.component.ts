import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { BuyerService } from 'src/app/buyer/services/buyer.service';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';
import { Buyer } from 'src/app/shared/models/buyer.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  user: Users = {
    id: this.usuarioLogado.id,
  };

  buyer: Buyer = {
    name: '',
    id: null,
    document: '',
    address: '',
    phone: '',
    email: '',
  };

  constructor(
    private readonly buyerService: BuyerService,
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
    this.buyerService.create(this.buyer).subscribe(() => {
      this.buyerService.showMessage('Comprador criado!');
      this.router.navigate(['/buyers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/buyers']);
  }
}
