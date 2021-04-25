import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AuthService } from './services/user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'proyectofinal-front'

  constructor(){}


  ngOnInit(): void {
  }

}
