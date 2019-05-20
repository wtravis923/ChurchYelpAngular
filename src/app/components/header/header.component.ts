import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() public title: string;
@Input() public isLoggedIn: boolean;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

}
