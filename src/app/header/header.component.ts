import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  exclusive: boolean = false;
  menutype: string = 'default';
  constructor(private router: Router, private sellerService: SellerService) {}

  ngOnInit(): void {
    this.sellerService.exclusive.subscribe((res) => {
      this.exclusive = res;
    });

    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (!!localStorage.getItem('email') || val.url.includes('/seller')) {
          this.menutype = 'seller';
        } else {
          this.menutype = 'default';
        }
      }
    });
  }
}
