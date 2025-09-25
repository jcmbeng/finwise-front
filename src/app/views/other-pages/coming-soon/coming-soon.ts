import { Component } from '@angular/core';
import {interval,Subscription} from 'rxjs';
import {calculateTimeToEvent} from '@/app/utils/calculate-time';
import {LucideAngularModule, LucideMail} from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
    imports: [
        LucideAngularModule ,RouterLink
    ],
  templateUrl: './coming-soon.html',
  styles: ``
})
export class ComingSoon{
currentYear: number = new Date().getFullYear();   

    _days?: number
    _hours?: number
    _minutes?: number
    _seconds?: number
    countdown: { days: number; hours: number; minutes: number; seconds: number } =
        {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    private intervalSubscription!: Subscription

    ngOnInit(): void {
        this.countdown = calculateTimeToEvent()
        this.intervalSubscription = interval(1000).subscribe(() => {
            this.countdown = calculateTimeToEvent()
        })
    }

    ngOnDestroy(): void {
        this.intervalSubscription.unsubscribe()
    }

    protected readonly LucideMail = LucideMail;
}
