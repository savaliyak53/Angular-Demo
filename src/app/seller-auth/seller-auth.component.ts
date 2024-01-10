import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../dataType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent implements OnInit {
  isLoginError: boolean = false;
  constructor(private seller: SellerService, private router: Router) {}
  showLogin: boolean = false;
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.seller.userSignUp(data);
    if (data?.email === 'john123@gmail.com') {
      localStorage.setItem('email', data?.email);
      this.router.navigate(['/seller-home']);
    } else {
      console.warn('login failed');
      this.isLoginError = true;
    }
  }

  login(data: Login): void {
    this.seller.userSignUp(data);
    if (data?.email === 'john123@gmail.com') {
      localStorage.setItem('email', data?.email);
      this.router.navigate(['/seller-home']);
    }
  }

  openLogin(): void {
    this.showLogin = !this.showLogin;
  }
}
