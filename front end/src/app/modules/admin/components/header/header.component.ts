import { Component } from '@angular/core';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private auth: LoginService) {}
  logout(): void {
    this.auth.logout();
  }
}
