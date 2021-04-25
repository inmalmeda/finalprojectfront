import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/states/store.service';
import UserState from 'src/app/store/config/userState.interface';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {

  name: string = ''
  email: string = ''
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {

    this.storeService.getState('userState').subscribe((state: UserState) => {
      this.name = state.name
      this.email = state.email
    })
  }

}
