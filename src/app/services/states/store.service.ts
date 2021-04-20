import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from 'src/app/store/actions/action';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<any>) { }

    /**
     * Metodo para obtener cualquier STATE del STORE de la app
     */
     getState(state: string) {
      return this.store.select(state)
     }

    /**
     * Metodo  para despachar acciones
     * @param action que despacha y es escuchada por el REDUCER
     */
     updateState(action: Action) {
      this.store.dispatch(action)
     }
}
