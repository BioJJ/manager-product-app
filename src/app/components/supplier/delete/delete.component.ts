import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from 'src/app/suppliers/services/suppliers.service';
import { Supplier } from 'src/app/shared/models/supplier.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  supplier: Supplier;

  constructor(
    private readonly supplierService: SuppliersService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supplierService.readById(id).subscribe((supplier: Supplier) => {
      this.supplier = supplier;
    });
  }

  deleteProduct(): void {
    this.supplierService.delete(this.supplier.id).subscribe(() => {
      this.supplierService.showMessage('Fornecedor excluido com sucesso!');
      this.router.navigate(['/suppliers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/suppliers']);
  }
}
