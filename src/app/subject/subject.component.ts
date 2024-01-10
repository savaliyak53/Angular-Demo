import { Component, OnDestroy, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent implements OnInit, OnDestroy {
  constructor(private sellerService: SellerService) {}

  ngOnInit(): void {
    this.sellerService.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.sellerService.exclusive.next(false);
  }
}
