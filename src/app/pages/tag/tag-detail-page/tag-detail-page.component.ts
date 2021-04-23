import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag/tag.model';
import { UtilsService } from 'src/app/services/states/utils.service';
import { TagService } from 'src/app/services/tag/tag.service';
import { Location} from '@angular/common'
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';

@Component({
  selector: 'app-tag-detail-page',
  templateUrl: './tag-detail-page.component.html',
  styleUrls: ['./tag-detail-page.component.scss']
})
export class TagDetailPageComponent implements OnInit {

   tag: any

  constructor(private tagService: TagService, private router: Router, private snackBar: SnackBarService,
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
        this.snackBar.showSnack(response.message)
        this.storeUtils.changeHeader('Lista de etiquetas', 'ETIQUETAS', 'Añadir Etiqueta', true, '')
        this.router.navigate(['/tags'])
      },
         err => {
        this.snackBar.showSnack("Error al actualizar la etiqueta")
    }
  )}
}
