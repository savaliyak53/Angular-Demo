import { Component, OnDestroy, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent implements OnInit, OnDestroy {
  constructor(private sellerService: SellerService) {}
  // one way
  pageName = 'One way data binding';
  data = 'ANGULAR';
  btnDisable = false;
  itemImageUrl =
    'https://c.ndtvimg.com/2021-07/6pvevhlc_india-flag-india-unity-pti-photo-ndtv-file_625x300_09_July_21.jpg';

  // two way
  search: string = 'I-Phone';
  password: string = '';

  handleClick() {
    console.log(this.search);
    this.password = this.search;
    console.log('click');
  }

  ngOnInit(): void {
    this.sellerService.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.sellerService.exclusive.next(false);
  }
}
