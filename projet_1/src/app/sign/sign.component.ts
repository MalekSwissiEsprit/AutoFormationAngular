import { Component } from '@angular/core';
import { FormControlName, FormGroup, NgForm ,FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  fw1: any;
  nommail: any;
  passvalue: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.fw1 = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    });
  }

  get mail() {
    return this.fw1.get('mail');
  }

  get pass() {
    return this.fw1.get('pass');
  }

  signup() {
    if (this.fw1.valid) {
      const mailValue = this.mail.value;
      const nommail = mailValue.substring(0, mailValue.indexOf('@'));
      const passValue = this.pass.value;

      this.router.navigate(['/toiles/' + nommail ]);
    }
  }
 
}
