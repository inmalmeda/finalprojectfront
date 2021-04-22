import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/models/tag/tag.model';
import { UtilsService } from 'src/app/services/states/utils.service';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-tag-new-page',
  templateUrl: './tag-new-page.component.html',
  styleUrls: ['./tag-new-page.component.scss']
})
export class TagNewPageComponent implements OnInit {

  tagSubscription: Subscription = new Subscription()

  constructor(private tagService: TagService, private router: Router, private _snackBar: MatSnackBar,
    private storeUtils: UtilsService) { }

  ngOnInit(): void {
  }

  createTag(tag: Tag) {
    this.tagService.createTag(tag)
      .subscribe((response) => {
        this._snackBar.open(response.message,"", {
          duration: 3000
        });
        this.storeUtils.changeHeader('Lista de etiquetas', 'ETIQUETAS', 'Añadir Etiqueta', true,'')
        this.router.navigate(['/tags'])
      },
      err => {
        this._snackBar.open("Error al crear la etiqueta","", {
          duration: 3000
        });
    }
  )}

}
