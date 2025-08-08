import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Buyer } from 'src/app/shared/models/buyer.model';

@Injectable({
  providedIn: 'root',
})
export class BuyerService {
  baseUrl: string = `${config.default.url}/api/buyers`;
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

  create(buyer: Buyer): Observable<Buyer> {
    return this.http.post<Buyer>(this.baseUrl, buyer).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByUser(id: number): Observable<Buyer[]> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Buyer[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readNotUser(id: number): Observable<Buyer[]> {
    const url = `${this.baseUrl}/${id}/in-stock`;
    return this.http.get<Buyer[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readInStock(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(this.baseUrl + '/in-stock').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Buyer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Buyer>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(buyer: Buyer): Observable<Buyer> {
    const url = `${this.baseUrl}/${buyer.id}`;
    return this.http.patch<Buyer>(url, buyer).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Buyer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Buyer>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
