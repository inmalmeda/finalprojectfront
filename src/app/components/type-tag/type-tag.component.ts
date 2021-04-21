import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag/tag.model';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.scss']
})
export class TypeTagComponent implements OnInit {


  @Input()
  tag: Tag = new Tag(0,'','',new Date(), new Date())

  constructor() { }

  ngOnInit(): void {
  }


}
