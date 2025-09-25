import {Component, OnInit} from '@angular/core';
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {LanguageOptionType} from '@/app/types/layout';
import {LanguageService} from '@core/services/language.service';

@Component({
  selector: 'app-language-dropdown',
    imports: [
        NgbDropdown,
        NgbDropdownMenu,
        NgbDropdownToggle
    ],
  templateUrl: './language-dropdown.html'
})
export class LanguageDropdown implements OnInit {
    languages: LanguageOptionType[] = [];
    selectedLang: LanguageOptionType = this.languages[0];

    constructor(private langService: LanguageService) {
    }

    ngOnInit(): void {
        this.languages = this.langService.getLanguages();
        this.langService.currentLang$.subscribe(lang => this.selectedLang = lang);
        this.langService.initLanguage();
    }

    changeLanguage(code: string) {
        this.langService.setLanguage(code);
    }
}
