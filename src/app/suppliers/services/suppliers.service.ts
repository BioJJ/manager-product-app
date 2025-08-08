import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Supplier } from 'src/app/shared/models/supplier.model';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  baseUrl: string = `${config.default.url}/api/suppliers`;
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.baseUrl, supplier).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByUser(id: number): Observable<Supplier[]> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Supplier[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readNotUser(id: number): Observable<Supplier[]> {
    const url = `${this.baseUrl}/${id}/in-stock`;
    return this.http.get<Supplier[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readInStock(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseUrl + '/in-stock').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Supplier> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Supplier>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(supplier: Supplier): Observable<Supplier> {
    const url = `${this.baseUrl}/${supplier.id}`;
    return this.http.patch<Supplier>(url, supplier).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Supplier> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Supplier>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
