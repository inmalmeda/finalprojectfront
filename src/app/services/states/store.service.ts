import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from 'src/app/store/actions/action';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<any>) { }

    /**
     * Get every states of REDUX
     */
     getState(state: string) {
      return this.store.select(state)
     }

    /**
     * Change every state of REDUX
     * @param action
     */
     updateState(action: Action) {
      this.store.dispatch(action)
     }
}
