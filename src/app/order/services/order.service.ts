import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl: string = `${config.default.url}/api/orders`;
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

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByUser(id: number): Observable<Order[]> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Order[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readNotUser(id: number): Observable<Order[]> {
    const url = `${this.baseUrl}/${id}/in-stock`;
    return this.http.get<Order[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readInStock(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + '/in-stock').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Order> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Order>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(order: Order): Observable<Order> {
    const url = `${this.baseUrl}/${order.id}`;
    return this.http.patch<Order>(url, order).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Order> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Order>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
