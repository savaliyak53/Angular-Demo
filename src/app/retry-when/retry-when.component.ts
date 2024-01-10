import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { CommonModule } from '@angular/common';
import { delay, retry } from 'rxjs';

@Component({
  selector: 'app-retry-when',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retry-when.component.html',
  styleUrl: './retry-when.component.css',
})
export class RetryWhenComponent implements OnInit {
  data: any;
  status: string = 'No Data Avaliable';
  constructor(private Service: SellerService) {}

  ngOnInit(): void {}

  fetchproduct(): void {
    this.Service.getProduct()
      .pipe(delay(2000))
      .subscribe((ref) => {
        this.data = ref;
        this.status = 'Data Fetched';
      });
  }
}
