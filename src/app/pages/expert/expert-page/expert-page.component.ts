import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FiltersExpert } from 'src/app/models/expert/filters/filters-expert.model';
import { ExpertUtilService } from 'src/app/services/expert/manage/expert-util.service';
import { StoreService } from 'src/app/services/states/store.service';
import { UtilsService } from 'src/app/services/states/utils.service';
import PaginationState from 'src/app/store/config/paginationState.interface';

@Component({
  selector: 'app-expert-page',
  templateUrl: './expert-page.component.html',
  styleUrls: ['./expert-page.component.scss']
})
export class ExpertPageComponent implements OnInit {

  totalExperts: number = 0
  filterExperts: FiltersExpert = new FiltersExpert('','','','', 0, 0)
  pageSizeOptions: number[] = [5,10, 15, 20, 50];
  lowValue: number = 0;
  limit: number = 5;

  constructor(private storeService: StoreService, private storeUtils: UtilsService, private expertUtilService : ExpertUtilService) { }

  ngOnInit(): void {

    this.expertUtilService.loadStates()
    this.storeUtils.changePagination(this.lowValue, this.limit)

    this.storeService.getState('paginationState').subscribe((state: PaginationState) => {
      this.totalExperts = state.total
    })
    this.expertUtilService.getAllExperts()
  }


  /**
   * Set paginator data and get all experts
   * @param event
   */
  getPaginatorData(event: PageEvent) :void{
    this.lowValue = event.pageIndex * event.pageSize;
    this.limit = event.pageSize;
    this.storeUtils.changePagination(this.lowValue, this.limit)
    this.expertUtilService.getAllExperts()
  }

  /**
   * Change the filters to get all experts
   * @param event
   */
  getFilter(event: boolean) {
    if (event) {
      this.storeUtils.changePagination(0, 5)
      this.expertUtilService.getAllExperts()
    }
  }

}
