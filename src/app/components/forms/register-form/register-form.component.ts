import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/models/user/newUser/new-user.Model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({})

  @Output() manipulateUser: EventEmitter<NewUser> = new EventEmitter<NewUser>()

  @Output() goLogin: EventEmitter<Boolean> = new EventEmitter<Boolean>()

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:  ['' , Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(70)])],
      email: ['' , Validators.compose([Validators.required, Validators.email])],
      password:  ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
      password2: ['', Validators.compose([Validators.required])]
    })
  }

  register(): void {
    if (this.registerForm.valid) {
      if (this.registerForm.value.password == this.registerForm.value.password2) {
          this.manipulateUser.emit(new NewUser(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password))
      } else {
        this.authService.setLoggedIn(false)
        this.snackBar.showSnack("Las contraseñas no coinciden")
      }
    } else {
      this.authService.setLoggedIn(false)
      this.snackBar.showSnack("Los datos proporcionados son incorrectos")
    }
  }

  returnBack() {
    this.goLogin.emit(true)
  }
}
