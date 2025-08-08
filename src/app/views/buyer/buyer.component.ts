import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
})
export class BuyerComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Compradores',
      icon: 'real_estate_agent',
      routeUrl: '/buyers',
    };
  }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  navigateToPropertyCreate(): void {
    this.router.navigate(['/buyers/create']);
  }
}
