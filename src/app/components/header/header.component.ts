import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/states/store.service';
import { UtilsService } from 'src/app/services/states/utils.service';
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
  textButton = ''
  showButton = true
  textButtonBack = ''

  countElements: number = 0

  constructor(private storeService: StoreService, private router: Router, private storeUtils: UtilsService) { }

  ngOnInit(): void {
    this.loadHeader()
  }

  createRegiter() {
    if (this.textButton == 'Nuevo Experto') {
      this.storeUtils.changeHeader('Nuevo experto', '', '', false, 'Volver a la lista de expertos >')
      this.router.navigate(['/experts/new/expert'])
    } else {
      this.storeUtils.changeHeader('Nueva etiqueta', '', '', false, 'Volver a la lista de etiquetas >')
      this.router.navigate(['/tags/new/tag'])
    }
    this.textButtonBack = this.title == 'Nuevo experto' ? 'Volver a la lista de expertos >' : 'Volver a la lista de etiquetas >'
  }

  goBack() {
    if (this.title == 'Nuevo Experto') {
      this.storeUtils.changeHeader('Lista de Expertos', 'CANDIDATOS', 'Nuevo Experto', true,'')
      this.loadHeader()
      this.router.navigate(['/experts'])
    } else {
      this.storeUtils.changeHeader('Lista de Etiquetas', 'ETIQUETAS', 'Añadir etiqueta', true,'')
        this.loadHeader()
      this.router.navigate(['/tags'])
    }
  }

  private loadHeader() {
    this.storeService.getState('titleHeaderState').subscribe((state: TitleHeaderState) => {
      this.title = state.titleMain
      this.subtitle = state.titleSecondary
      this.textButton = state.textButtonNew
      this.showButton = state.showButtonNew
      this.textButtonBack = state.textBack
    })

    this.storeService.getState('paginationState').subscribe((state: PaginationState) => {
      this.countElements = state.total
    })
  }
}
