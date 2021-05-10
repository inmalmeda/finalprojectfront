import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/states/store.service';
import { AuthService } from 'src/app/services/user/auth.service';
import UserState from 'src/app/store/config/userState.interface';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {

  name: string = ''
  email: string = ''

   @Output() manipulateLogOut: EventEmitter<Boolean> = new EventEmitter<Boolean>()

  constructor(private storeService: StoreService, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {

    this.storeService.getState('userState').subscribe((state: UserState) => {
      this.name = state.name
      this.email = state.email
    })
  }

  logout() {
    this.manipulateLogOut.emit(true)
  }
}
