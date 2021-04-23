import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tag, private tagService: TagService,
    private snackBar: SnackBarService) { }

  nameTag = ''
  message = ''

  ngOnInit(): void {
    this.nameTag = this.data.name
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void{
    this.tagService.deleteTagById(this.data.id).subscribe(data => {
      this.snackBar.showSnack(data.message)
    },
      err => {
        this.snackBar.showSnack("Error al borrar la etiqueta")
      }
    )
    this.dialogRef.close();
  }
}
