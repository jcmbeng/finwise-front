import {Component, OnInit} from '@angular/core';
import {PageTitle} from '@app/components/page-title';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {NgIcon} from '@ng-icons/core';
import {FormsModule} from '@angular/forms';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {AsyncPipe} from '@angular/common';
import {CustomPagination} from '@app/components/custom-pagination';

type ManagementType = {
    name: string;
    roles: {
        label: string;
        variant: string;
    }[];
    date: string;
    time: string;
    users: number;
    selected?: boolean;
}

@Component({
    selector: 'app-permissions',
    imports: [
        PageTitle,
        NgIcon,
        FormsModule,
        NgbdSortableHeader,
        LucideAngularModule,
        AsyncPipe,
        CustomPagination
    ],
    providers: [TableService],
    templateUrl: './permissions.html',
    styles: ``
})
export class Permissions implements OnInit{
    managementData$: Observable<ManagementType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<ManagementType>) {
        this.managementData$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }


    ngOnInit(): void {
        this.tableService.setItems(this.PermissionManagementData, 8)
    }

    PermissionManagementData: ManagementType[] = [
        {
            name: 'User Management',
            roles: [
                {label: 'Administrator', variant: 'primary'},
            ],
            date: '24 Jun 2025',
            time: '6:43 am',
            users: 12,
        },
        {
            name: 'Content Management',
            roles: [
                {label: 'Administrator', variant: 'primary'},
                {label: 'Developer', variant: 'danger'},
                {label: 'Analyst', variant: 'info'},
                {label: 'Support', variant: 'secondary'},
                {label: 'Trial', variant: 'warning'},
            ],
            date: '21 Feb 2025',
            time: '11:05 am',
            users: 5,
        },
        {
            name: 'Financial Management',
            roles: [
                {label: 'Administrator', variant: 'primary'},
                {label: 'Analyst', variant: 'info'},
            ],
            date: '24 Jun 2025',
            time: '5:30 pm',
            users: 8,
        },
        {
            name: 'Reporting',
            roles: [
                {label: 'Administrator', variant: 'primary'},
                {label: 'Analyst', variant: 'info'},
            ],
            date: '21 Feb 2025',
            time: '5:20 pm',
            users: 6,
        },
        {
            name: 'Payroll',
            roles: [
                {label: 'Administrator', variant: 'primary'},
                {label: 'Analyst', variant: 'info'},
            ],
            date: '20 Jun 2025',
            time: '6:05 pm',
            users: 4,
        },
        {
            name: 'Disputes Management',
            roles: [
                {label: 'Administrator', variant: 'primary'},
                {label: 'Developer', variant: 'danger'},
                {label: 'Support', variant: 'secondary'},
            ],
            date: '24 Jun 2025',
            time: '5:20 pm',
            users: 7,
        },
        {
            name: 'Audit Logs',
            roles: [
                {label: 'Administrator', variant: 'primary'},
            ],
            date: '23 Jun 2025',
            time: '4:00 pm',
            users: 9,
        },
        {
            name: 'API Access',
            roles: [
                {label: 'Administrator', variant: 'primary'},
                {label: 'Trial', variant: 'warning'},
                {label: 'DevOps', variant: 'info'},
            ],
            date: '22 Jun 2025',
            time: '2:35 pm',
            users: 3,
        },
        {
            name: 'Notification Center',
            roles: [
                {label: 'Administrator', variant: 'primary'},
                {label: 'Support', variant: 'info'},
            ],
            date: '22 Jun 2025',
            time: '8:45 am',
            users: 2,
        },
        {
            name: 'Access Logs',
            roles: [
                {label: 'Administrator', variant: 'primary'},
                {label: 'Support', variant: 'secondary'},
            ],
            date: '19 Jun 2025',
            time: '6:10 pm',
            users: 5,
        },
    ];
    protected readonly LucideSearch = LucideSearch;
}
