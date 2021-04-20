import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { OnDemandPreloadOptions, OnDemandPreloadService } from '../on-demand-preload.service';


@Injectable({ providedIn: 'root' })
export class OnDemand implements PreloadingStrategy {

  private preloadOnDemand$: Observable<OnDemandPreloadOptions>

  constructor(private OnDemandService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.OnDemandService.state
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {

    return this.preloadOnDemand$.pipe(
      mergeMap(
        preloadOptions => {
          const preload = this._preloadCheck(route, preloadOptions)
          return preload ? load() : EMPTY
        }
      )
    )
  }


  /**
   * Metodo para comprobar si se debe o no precargar una ruta
   * @param route ruta a evaluar
   * @param preloadOptions opciones de la ruta a evaluar
   */
  private _preloadCheck(route :Route, preloadOptions: OnDemandPreloadOptions) {
    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadOptions.routePath) &&
      preloadOptions.preload
    )
  }
}
