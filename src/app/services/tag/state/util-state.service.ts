import { Injectable } from '@angular/core';
import { Tag } from 'src/app/models/tag/tag.model';
import { ACTION_CHANGE_LISTTAGS, ACTION_CHANGE_TAGSELECTED, ACTION_CHANGE_TAG_FILTERNAME } from 'src/app/store/actions/actions.types';
import { StoreService } from '../../states/store.service';


@Injectable({
  providedIn: 'root'
})
export class UtilStateService {

  constructor(private storeService: StoreService) { }

  changeListTags(tags: Tag[]) {
    this.storeService.updateState({
      type: ACTION_CHANGE_LISTTAGS,
      payload: tags
    })
  }

  changeTagSelected(tag: Tag) {
    this.storeService.updateState({
      type: ACTION_CHANGE_TAGSELECTED,
      payload: tag
    })
  }

  changeFilterName(name: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_TAG_FILTERNAME,
      payload: name
    })
  }

}
