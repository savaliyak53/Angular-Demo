import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SellerService } from './services/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { DecoratoeComponent } from './decoratoe/decoratoe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    DecoratoeComponent,
  ],
  providers: [SellerService],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Ecom-project';
  data = 'Data from parent to child alias';
  outPutData = '';

  parentFunction(message: string) {
    console.log(message);
  }

  recieveOutData = ($event: string) => {
    if (this.outPutData === $event) {
      this.outPutData = '';
    } else {
      this.outPutData = $event;
    }
  };
}
