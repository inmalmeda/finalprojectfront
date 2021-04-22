import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { StoreService } from 'src/app/services/states/store.service';
import { UtilsService } from 'src/app/services/states/utils.service';
import TitleHeaderState from 'src/app/store/config/titleHeaderState.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{

  isExpert = true
  isTag = false

  titleMain = ''
  titleSecondary = ''
  actionTitle = ''


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private storeUtils: UtilsService,
    private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.storeService.getState('titleHeaderState').subscribe((state: TitleHeaderState) => {
      this.actionTitle = state.textButtonNew
    })
  }

  loadRoute(routePath: string) {
    this.titleMain = routePath == 'experts' ? 'Lista de Expertos' : 'Lista de Etiquetas'
    this.titleSecondary = routePath == 'experts' ? 'CANDIDATOS' : 'ETIQUETAS'
    this.actionTitle = routePath == 'experts' ? 'Nuevo Experto' : 'Añadir etiqueta'

    this.changeColorSelected(routePath)
    this.storeUtils.changeHeader(this.titleMain, this.titleSecondary, this.actionTitle, true,'')
  }

  private changeColorSelected(routePath: string) {
    this.isExpert = routePath == 'experts' ? true : false;
    this.isTag = !this.isExpert
  }

}
