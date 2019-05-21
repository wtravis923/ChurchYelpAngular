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
@Input() public isLoggedIn: boolean;

constructor(private _authService: AuthService, private _router: Router) { }


  ngOnInit() {
    if(localStorage.getItem('id_token')){
      this.isLoggedIn = true;
    }
  }

  onLogOut(){
    this._authService.logout();
    this.isLoggedIn = false;
    console.log(this.isLoggedIn);
    this._router.navigate(['/login']);
  }
  

}

export interface UserData{
  isLoggedIn: boolean;
}
