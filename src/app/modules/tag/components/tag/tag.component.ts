import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag/tag.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  //@Input() tag: Tag = new Tag(0,'',new Date(),new Date())

  constructor() { }

  ngOnInit(): void {
  }

}
