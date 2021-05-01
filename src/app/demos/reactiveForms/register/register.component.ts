import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { User } from './models/usuario';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators   } from 'ng2-validation';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  registerForm: FormGroup;
  user: User;
  formResult: string = '';
  MASKS = MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  noSavedChanges: boolean;

  constructor(private fb: FormBuilder) { 
    this.validationMessages = {
      name: {
        required: 'Name is mandatory',
        min: 'Name must have at least 2 carachters',
        max: 'Name must have maximum 150 carachters'
      },
      pps: {
        required: 'PPS is mandatory',
        cpf: 'CPF invalid format'
      },
      email: {
        required: 'Email Adress is mandatory',
        email: 'Email invalid'
      },
      password: {
        required: 'Password is mandatory',
        rangeLength: 'Password must contain between 6 and 15 carachters'
      },
      confirmPassword: {
        required: 'Password confirmation is mandatory',
        rangeLength: 'Password must contain between 6 and 15 carachters',
        equalTo: 'Passwords do not match'
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    const password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
    const confirmPassword = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(password)]);

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, CustomValidators.minLength(2), CustomValidators.max(150)]],
      pps: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.registerForm);
      this.noSavedChanges = true;
    });
  } 

  addUser() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);
      this.formResult = JSON.stringify(this.registerForm.value); 
      this.noSavedChanges = false;
    }
    else {
      this.formResult = "Not valid"
    }
  }
}
