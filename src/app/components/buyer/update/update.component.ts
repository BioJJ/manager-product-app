import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from 'src/app/buyer/services/buyer.service';
import { Buyer } from 'src/app/shared/models/buyer.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  buyer: Buyer;

  constructor(
    private readonly buyerService: BuyerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.buyerService.readById(id).subscribe((buyer: Buyer) => {
      this.buyer = buyer;
    });
  }

  updateProperty(): void {
    this.buyerService.update(this.buyer).subscribe(() => {
      this.buyerService.showMessage('Comprador atualizado com sucesso!');
      this.router.navigate(['/buyers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/buyers']);
  }
}
