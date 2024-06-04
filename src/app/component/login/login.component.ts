import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone : true,
  imports: [NgFor, NgIf,ReactiveFormsModule],
  templateUrl: './login.component.html',
  
})

export class LoginComponent {
  loginForm!: FormGroup;
  ErrorMsg: String='';
  constructor(private fb: FormBuilder, private authService : AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

       // Call the authentication service's login method
       if (this.authService.login(username, password)) {
        // Navigate to the dashboard
        this.router.navigate(['/dashboard']);
      } else {
        // Handle authentication error (show error message, etc.)
        this.ErrorMsg = 'Error, invalid User name or password!';
      }

    }
  }
}
