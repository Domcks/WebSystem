import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {  
    isRightPanelActive: boolean = false;
  
  togglePanel(isRightPanelActive: boolean): void {
      this.isRightPanelActive = isRightPanelActive;
    }

  onRegisterSubmit(registerForm: NgForm): void {
    if (registerForm.valid) {
      console.log('Registro enviado:', registerForm.value);
    }
  }

  onLoginSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      console.log('Inicio de sesión enviado:', loginForm.value);
    }
  }
}
