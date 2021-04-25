import { Injectable } from '@angular/core';
import { ACTION_CHANGE_LIMIT, ACTION_CHANGE_PAGES, ACTION_CHANGE_SHOWBUTTONNEW, ACTION_CHANGE_SUBTITLEHEADER, ACTION_CHANGE_TEXTBACK, ACTION_CHANGE_TEXTBUTTONNEW, ACTION_CHANGE_TITLEHEADER, ACTION_CHANGE_TOTALRESULT, ACTION_CHANGE_USER_EMAIL, ACTION_CHANGE_USER_NAME } from 'src/app/store/actions/actions.types';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private storeService: StoreService) { }

  changeHeader(title: string, subtitle: string, action: string, show:boolean, text:string) {
    this.changeTitleHeader(title)
    this.changeSubTitleHeader(subtitle)
    this.changeActionButton(action)
    this.changeShowButton(show)
    this.changeTextBack(text)
  }

  changeLooged(name: string, email:string) {
    this.changeNameLooged(name)
    this.changeEmailLooged(email)
  }

  changeNameLooged(name: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_USER_NAME,
      payload: name
    })
  }

  changeEmailLooged(email: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_USER_EMAIL,
      payload: email
    })
  }




  changeTotalResult(total: number) {
    this.storeService.updateState({
      type: ACTION_CHANGE_TOTALRESULT,
      payload: total
    })
  }

  changePagination(page: number, limit: number) {
    this.changePage(page)
    this.changeLimit(limit)
  }


  private changeTitleHeader(title: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_TITLEHEADER,
      payload: title
    })
  }

  private changeSubTitleHeader(subtitle: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_SUBTITLEHEADER,
      payload: subtitle
    })
  }

  private changeActionButton(action: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_TEXTBUTTONNEW,
      payload: action
    })
  }

  private changeShowButton(show: boolean) {
    this.storeService.updateState({
      type: ACTION_CHANGE_SHOWBUTTONNEW,
      payload: show
    })
  }

  private changeTextBack(text: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_TEXTBACK,
      payload: text
    })
  }


  private changePage(page: number) {
    this.storeService.updateState({
      type: ACTION_CHANGE_PAGES,
      payload: page
    })
  }

  private changeLimit(limit: number) {
    this.storeService.updateState({
      type: ACTION_CHANGE_LIMIT,
      payload: limit
    })
  }

}
