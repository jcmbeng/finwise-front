import {Component, Input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-ui-card',
    imports: [ NgIcon, NgbCollapse],
    template: `
        @if (isVisible) {
            <div class="card {{isCollapsed ? 'card-collapse' : ''}} {{className}}">
                <div class="card-header justify-content-between align-items-center" [class]="isCollapsed ?'border-0':''">
                    <div class="d-flex gap-2">
                     @if (canCreate) {
                        <a routerLink="/add-product" class="btn btn-sm btn-soft-secondary">
                        <ng-icon name="tablerPlus" class="me-1"/>
                        {{ createButtonText || 'Add New' }}
                    </a>
                     }
                      @if (canExport) {
                    <a href="javascript:void(0);" class="btn btn-sm btn-primary">
                        <ng-icon name="tablerFileExport" class="me-1"/>
                        {{ exportButtonText || 'Export' }}
                    </a>
                      }
                    </div>
                </div>
                    <div>
                        @if (isTogglable || isReloadable || isCloseable) {
                            <div class="card-action">
                                @if (isTogglable) {
                                    <button (click)="isCollapsed = !isCollapsed"
                                            class="card-action-item border-0 d-flex align-items-center justify-content-center">
                                        @if (!isCollapsed) {
                                            <ng-icon name="tablerChevronUp"/>
                                        }
                                        @if (isCollapsed) {
                                            <ng-icon name="tablerChevronDown"/>
                                        }
                                    </button>
                                }
                                @if (isReloadable) {
                                    <button (click)="reload()" class="card-action-item border-0 d-flex align-items-center justify-content-center">
                                        <ng-icon name="tablerRefresh"/>
                                    </button>
                                }
                                @if (isCloseable) {
                                    <button (click)="close()" class="card-action-item border-0 d-flex align-items-center justify-content-center">
                                        <ng-icon name="tablerX"/>
                                    </button>
                                }
                            </div>
                        }
                        <ng-content select="[helper-text]"></ng-content>
                    </div>
                   

                <div class="card-body {{bodyClass}}" #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed">
                    <ng-content select="[card-body]"></ng-content>
                </div>

                @if (isReloading) {
                <div class="card-overlay d-flex">
                    <div class="spinner-border text-primary"></div>
                </div>
                }

            </div>
        }
    `
})
export class UiCard {
    @Input() title!: string
    @Input() isTogglable?: boolean
    @Input() isReloadable?: boolean
    @Input() isCloseable?: boolean
    @Input() canCreate?: boolean
    @Input() canExport?: boolean
    @Input() createButtonText?: string
    @Input() exportButtonText?: string
    @Input() bodyClass?: string
    @Input() className?: string

    isCollapsed = false
    isReloading = false;
    isVisible = true;

    reload() {
        this.isReloading = true;
        setTimeout(() => (this.isReloading = false), 1500); // fake reload
    }

    close() {
        this.isVisible = false;
    }
}
