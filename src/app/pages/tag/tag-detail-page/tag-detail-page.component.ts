import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/models/tag/tag.model';
import { UtilsService } from 'src/app/services/states/utils.service';
import { TagService } from 'src/app/services/tag/tag.service';
import { Location} from '@angular/common'
import { UtilStateService } from 'src/app/services/tag/state/util-state.service';

@Component({
  selector: 'app-tag-detail-page',
  templateUrl: './tag-detail-page.component.html',
  styleUrls: ['./tag-detail-page.component.scss']
})
export class TagDetailPageComponent implements OnInit {

  tagSubscription: Subscription = new Subscription()
  tag: any

  constructor(private tagService: TagService, private router: Router, private _snackBar: MatSnackBar,
    private storeUtils: UtilsService, private location: Location) { }

  ngOnInit(): void {
    if (this.location.getState()) {
      this.tag = this.location.getState()
    }
    this.storeUtils.changeHeader('Información de la etiqueta', '', '', false,'Volver al listado de etiquetas')
  }

  updateTag(tag: Tag) {
     this.tagService.updateTag(tag)
      .subscribe((response) => {
        this._snackBar.open(response.message,"", {
          duration: 3000
        });
        this.storeUtils.changeHeader('Lista de etiquetas', 'ETIQUETAS', 'Añadir Etiqueta', true, '')
        this.router.navigate(['/tags'])
      },
      err => {
        this._snackBar.open("Error al actualizar la etiqueta","", {
          duration: 3000
        });
    }
  )
}

}
