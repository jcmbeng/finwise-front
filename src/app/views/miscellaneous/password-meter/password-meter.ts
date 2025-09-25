import {Component} from '@angular/core';
import {PageTitle} from "@app/components/page-title";
import {UiCard} from "@app/components/ui-card";
import {PasswordStrengthBar} from "@app/components/password-strength-bar";
import {FormsModule} from '@angular/forms';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-password-meter',
  imports: [PageTitle, UiCard, PasswordStrengthBar,FormsModule,NgbCollapseModule],
  templateUrl: './password-meter.html',
  styles: ``
})
export class PasswordMeter {
  password: string = '';

  magicPassword = '';
  showRules = false;

  get isLengthValid() {
    return this.magicPassword.length >= 8;
  }
  get hasLowercase() {
    return /[a-z]/.test(this.magicPassword);
  }
  get hasUppercase() {
    return /[A-Z]/.test(this.magicPassword);
  }
  get hasNumber() {
    return /[0-9]/.test(this.magicPassword);
  }

  onBlur() {
    if (this.magicPassword.length > 0) {
      this.showRules = true;
    } else {
      this.showRules = false;
    }
  }
}
