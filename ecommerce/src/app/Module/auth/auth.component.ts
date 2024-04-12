import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { getUserProfile } from 'src/app/state/User/Actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  isLoggedIn=true;

 
  changeTemplate=()=>{
    this.isLoggedIn=!this.isLoggedIn;
  }

 

}
