import { Injectable } from '@angular/core';
import { Login, SignUp } from '../dataType';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  clienteUrl = 'https://dummyjson.com/products/1';

  constructor(private http: HttpClient, private router: Router) {}

  exclusive = new Subject<boolean>();

  userSignUp(data: SignUp | Login) {
    console.log('service call', data);
  }

  reloadSeller() {
    if ('john123@gmail.com' === localStorage.getItem('email')) {
      this.router.navigate(['/seller-home']);
    }
  }

  getProduct() {
    return this.http.get(this.clienteUrl);
  }
}
