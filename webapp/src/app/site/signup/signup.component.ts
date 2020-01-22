import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User[];
  signupForm: FormGroup;
  passwordError: boolean;
  error: string;
  constructor(private router: Router,private userService:UserService) { }

  ngOnInit() {
    this.passwordError = true;
    this.error = null;
    this.signupForm = new FormGroup({
      'username': new FormControl('', [Validators.required]
      ),
      'firstName': new FormControl('', [Validators.required]
      ),
      'lastName': new FormControl('', [Validators.required]
      ),
      'password': new FormControl('', [Validators.required]
      ),
      'confirmPassword': new FormControl('', [Validators.required]
      )
    });
  }
  onSubmit() {
    console.log("In submit")
    console.log(this.signupForm.value);
    this.userService.addUser(this.signupForm.value).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (responseError) => {
        this.error = responseError.error.errorMessage;
      });
  }
}
