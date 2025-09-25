import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MenuItemType} from '@/app/types/layout';
import {CommonModule} from '@angular/common';
import {NgIcon} from '@ng-icons/core';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';
import {scrollToElement} from '@/app/utils/layout-utils';
import {menuItems} from '@layouts/components/data';
import {LayoutStoreService} from '@core/services/layout-store.service';
import {LucideAngularModule} from 'lucide-angular';

@Component({
    selector: 'app-menu',
    imports: [NgIcon, NgbCollapse, RouterLink, CommonModule, LucideAngularModule],
    templateUrl: './app-menu.html'
})
export class AppMenu implements OnInit {

    router = inject(Router)
    layout = inject(LayoutStoreService)

    @ViewChild('MenuItemWithChildren', {static: true})
    menuItemWithChildren!: TemplateRef<{ item: MenuItemType }>;

    @ViewChild('MenuItem', {static: true})
    menuItem!: TemplateRef<{ item: MenuItemType }>;

    menuItems = menuItems;

    ngOnInit(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.expandActivePaths(this.menuItems);
                setTimeout(() => this.scrollToActiveLink(), 50);
            });

        this.expandActivePaths(this.menuItems);
        setTimeout(() => this.scrollToActiveLink(), 100);
    }

    hasSubMenu(item: MenuItemType): boolean {
        return !!item.children;
    }

    toggleMenu(item: MenuItemType, siblings: MenuItemType[]): void {
        if (!this.hasSubMenu(item)) return;
        siblings.forEach(sibling => {
            if (sibling !== item) sibling.isCollapsed = true;
        });
        item.isCollapsed = !item.isCollapsed;
    }

    expandActivePaths(items: MenuItemType[]) {
        for (const item of items) {
            if (this.hasSubMenu(item)) {
                item.isCollapsed = !this.isChildActive(item);
                this.expandActivePaths(item.children || []);
            }
        }
    }

    isChildActive(item: MenuItemType): boolean {
        if (item.url && this.router.url === item.url) return true;
        if (!item.children) return false;
        return item.children.some((child: MenuItemType) => this.isChildActive(child));
    }

    isActive(item: MenuItemType): boolean {
        return this.router.url === item.url;
    }

    scrollToActiveLink(): void {
        const activeItem = document.querySelector('[data-active-link="true"]') as HTMLElement;
        const scrollContainer = document.querySelector("#sidenav .simplebar-content-wrapper") as HTMLElement;

        if (activeItem && scrollContainer) {
            const containerRect = scrollContainer.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();

            const offset = itemRect.top - containerRect.top - window.innerHeight * 0.4;

            scrollToElement(scrollContainer, scrollContainer.scrollTop + offset, 500);
        }
    }

}
