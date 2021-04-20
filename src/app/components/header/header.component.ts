import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'src/app/services/states/store.service';
import PaginationState from 'src/app/store/config/paginationState.interface';
import TitleHeaderState from 'src/app/store/config/titleHeaderState.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = ''
  subtitle = ''

  countElements: number = 0

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
      this.storeService.getState('titleHeaderState').subscribe((state: TitleHeaderState) => {
       this.title = state.titleMain
       this.subtitle = state.titleSecondary
      })

      this.storeService.getState('paginationState').subscribe((state: PaginationState) => {
        this.countElements = state.total
       })
   }
}
