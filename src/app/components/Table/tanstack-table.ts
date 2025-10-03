import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Cell, FlexRenderDirective, Table} from '@tanstack/angular-table';
import {CommonModule} from '@angular/common';
import {NgIcon} from '@ng-icons/core';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tanstack-table',
    imports: [FlexRenderDirective, CommonModule, NgIcon, NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div [ngClass]="['table-responsive', className]">
            <table class="table table-hover table-responsive table-custom table-centered table-select w-100 mb-0">

                @if (showHeaders) {
                    <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                        @for (headerGroup of table.getHeaderGroups(); track headerGroup) {
                            <tr class="text-uppercase fs-xxs">
                                @for (header of headerGroup.headers; track header.id) {
                                    <th
                                        (click)="header.column.toggleSorting()"
                                        [style.cursor]="header.column.getCanSort() ? 'pointer' : 'default'"
                                        style="user-select: none"
                                    >
                                        <div class="d-flex align-items-center">
                                            @if (header.column.id === 'select') {
                                                <input type="checkbox"
                                                       class="form-check-input form-check-input-light fs-14"
                                                       [checked]="table.getIsAllPageRowsSelected()"
                                                       [indeterminate]="table.getIsSomePageRowsSelected()"
                                                       (change)="table.toggleAllPageRowsSelected($any($event.target).checked)"/>
                                            } @else {
                                                <ng-container
                                                    *flexRender="header.column.columnDef.header; props: header.getContext()">
                                                    {{ header.column.columnDef.header }}
                                                </ng-container>
                                            }

                                            @if (header.column.getCanSort()) {
                                                @switch (header.column.getIsSorted()) {
                                                    @case ('asc') {
                                                        <ng-icon name="tablerArrowUp" class="ms-1"/>
                                                    }
                                                    @case ('desc') {
                                                        <ng-icon name="tablerArrowDown" class="ms-1"/>
                                                    }
                                                }
                                            }
                                        </div>
                                    </th>
                                }
                            </tr>
                        }
                    </thead>
                }

                <tbody>
                    @if (table.getRowModel().rows.length === 0) {
                        <tr>
                            <td [attr.colspan]="columns.length" class="text-center py-3 text-muted">
                                {{ emptyMessage }}
                            </td>
                        </tr>
                    }

                    @for (row of table.getRowModel().rows; track row.id) {
                        <tr>
                            @for (cell of row.getVisibleCells(); track cell.id) {
                                <td>
                                    @if (cell.column.id === 'select') {
                                        <input type="checkbox"
                                               class="form-check-input form-check-input-light fs-14"
                                               [checked]="cell.row.getIsSelected()"
                                               (change)="cell.row.toggleSelected($any($event.target).checked)"/>
                                    }
                                    @if (cell.column.id === 'actions' && (canEdit || canShowDetails || canDelete)) {
                                        <div class="d-flex  gap-1 align-items-center">
                                            <div ngbDropdown placement="bottom-end">
                                                <a href="javascript:void(0);" ngbDropdownToggle
                                                   class="text-muted drop-arrow-none card-drop p-0"
                                                >
                                                    <ng-icon name="tablerDotsVertical" class="fs-lg"/>
                                                </a>
                                                <div ngbDropdownMenu class="dropdown-menu-end">
                                                    @if (canShowDetails) {
                                                    <a href="javascript:void(0)" ngbDropdownItem title="Show Details"><ng-icon
                                                        name="tablerEye" class="fs-lg"/> Show Details
                                                    </a>
                                                    }
                                                    @if (canEdit) {
                                                    <a href="javascript:void(0)" ngbDropdownItem title="Edit"><ng-icon
                                                        name="tablerEdit" class="fs-lg" style="color : #6d5fde;"/> Edit
                                                    </a>
                                                    }
                                                    @if (canDelete) {
                                                    <a href="javascript:void(0)" ngbDropdownItem title="Delete">
                                                        <ng-icon
                                                            name="tablerTrash" class="fs-lg" style="color : #f2526a;"/> Delete
                                                    </a>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    } @else {
                                        <ng-container
                                            *flexRender="cell.column.columnDef.cell; props: cell.getContext(); let cell">
                                            {{ cell }}
                                        </ng-container>

                                    }

                                </td>
                            }
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    `,
    styles: ``
})
export class TanstackTable<T> {
    @Input() table!: Table<T>;
    @Input() className = '';
    @Input() deleteUser!: (id: number) => void;
    @Input() emptyMessage: string | undefined = 'Nothing found.';
    @Input() showHeaders = true;
    @Input() canEdit = false;
    @Input() canDelete = false;
    @Input() canShowDetails = false;
    @Input() canExport = false;
    @Input() canAdd = false;

    get columns() {
        return this.table.getAllColumns();
    }

    getId(cell: Cell<any, unknown>): number {

        return cell.row.original.id;
    }
}
