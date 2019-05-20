import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() public title: string;
@Input() public isUserLoggedIn: boolean;

  

  constructor(public _router: Router, public _authService: AuthService) { }

  ngOnInit() {
    if(localStorage.getItem('id_token')){
      this.isUserLoggedIn = true;
    }
  }
  onLogOut(){
    this._authService.logout();
    this.isUserLoggedIn = false;
    console.log(this.isUserLoggedIn);
    this._router.navigate(['/login']);
  }
  

}

export interface UserData{
  isUserLoggedIn: boolean;
}
