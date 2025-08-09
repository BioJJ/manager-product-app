import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from 'src/app/suppliers/services/suppliers.service';
import { Supplier } from 'src/app/shared/models/supplier.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  supplier: Supplier;

  constructor(
    private readonly supplierService: SuppliersService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supplierService.readById(id).subscribe((supplier) => {
      this.supplier = supplier;
    });
  }

  updateProperty(): void {
    this.supplierService.update(this.supplier).subscribe(() => {
      this.supplierService.showMessage('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/suppliers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/suppliers']);
  }
}
