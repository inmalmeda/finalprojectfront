import { Component, OnInit } from '@angular/core';
import { FormControl,  } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { UtilStateService } from 'src/app/services/expert/state/util-state.service';
import { ExpertUtilService } from 'src/app/services/expert/util/expert-util.service';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-selector-tag',
  templateUrl: './selector-tag.component.html',
  styleUrls: ['./selector-tag.component.scss']
})
export class SelectorTagComponent implements OnInit{
  myControl = new FormControl();
  optionsTag: string[] = [];
  options: Tag[] = [];
  filteredOptions: any;
  valueFilter: string = ''

  constructor(private tagService: TagService, private storeUtilsExperts: UtilStateService,
                private expertUtilService: ExpertUtilService) { }

  ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return  this.optionsTag.filter(option => option.toLowerCase().indexOf(filterValue) === 0)
  }


  changeFilter(event: Event) {
    this.optionsTag.splice(0, this.optionsTag.length);

    this.valueFilter = (event.target as HTMLInputElement).value

    if (this.valueFilter != '') {
      this.tagService.getAllTags(new FiltersTag(this.valueFilter,0,4)).subscribe(data => {
        this.options = data.tags
      })
    }

    for (let index = 0; index < this.options.length; index++) {
      this.optionsTag.push(this.options[index].name)
    }
  }

  selectTag(event: any) {
    console.log(event)
    let tagSearch = this.options[this.optionsTag.indexOf(event)]

    if (event == '') {
      this.storeUtilsExperts.changeFilterTag('');
    } else {
      if(tagSearch != undefined)
        this.storeUtilsExperts.changeFilterTag(tagSearch.id.toString())
    }
    this.expertUtilService.getAllExperts();
  }

  selectTagIntro(event: any) {
    let tagSearch = (event.target as HTMLInputElement).value

    let finded = this.options.filter(x => x.name == tagSearch)[0];

    if (finded) {
      this.storeUtilsExperts.changeFilterTag(finded.id.toString())
    }
    this.expertUtilService.getAllExperts();
  }
}

