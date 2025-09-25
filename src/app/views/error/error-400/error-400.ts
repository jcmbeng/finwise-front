import { credits, currentYear } from '@/app/constants';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-400',
  imports: [RouterLink],
  templateUrl: './error-400.html',
  styles: ``
})
export class Error400{
   currentYear = currentYear
    credits = credits
}
