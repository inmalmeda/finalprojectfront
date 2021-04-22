import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tag, private tagService: TagService,
    private _snackBar: MatSnackBar) { }

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
      this._snackBar.open(data.message,"", {
        duration: 3000
      });
    },
      err => {
        this._snackBar.open("Error al borrar la etiqueta", "", {
          duration: 3000
        });
      }
    )
    this.dialogRef.close();
  }

}
