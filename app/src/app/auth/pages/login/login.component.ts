import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EMAIL_REGEX } from 'src/app/core/constants/custom-validators';
import { ErrorMessages } from 'src/app/core/constants/error-messages';
import { Login } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isFormSubmitted: boolean = false;
  loginForm!: FormGroup;
  errorMessage = new ErrorMessages();
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _localStorageService: LocalstorageService,
    private _router: Router,
    private _toasterService: ToasterService
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: [null, Validators.required]
    });
  }

  /**
   * Getter function for login form controls
   */
  get FormControl() {
    return this.loginForm.controls;
  }

  /**
   * Submit login form details to API
   */
  submit(): void {
    this.isFormSubmitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let paylod: Login = this.loginForm.value;
      this._authService.login(paylod).pipe(takeUntil(this._unsubscribe$)).subscribe({
        next: (res: any) => {
          // console.log(res);
          this._toasterService.success('Success', 'Logged in Successfully');
          this._localStorageService.Token = res?.bearer;
          this._router.navigate(['/dashboard/home']);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }

}
