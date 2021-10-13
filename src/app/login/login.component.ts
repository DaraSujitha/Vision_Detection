import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: any;
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  loginHandler() {
    if (this.loginForm.valid) {
      var user = this.loginForm.value.username
      console.log(this.loginForm.value);
      localStorage.setItem("currentUser", user)
      this.router.navigate(['/home/pallet']);
    }

  }
  ngOnInit(): void {
  }

}
