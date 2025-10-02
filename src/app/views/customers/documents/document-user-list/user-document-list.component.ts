import {Component, inject, Input, OnInit, signal, TemplateRef} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LucideAngularModule, LucideDollarSign, LucideSearch, LucideTag} from 'lucide-angular';
import {CustomerDocument} from '@/app/interfaces/customers/customer-document';
import {CustomerDocumentService} from '@/app/services/customers/customer-document-service';
import {
    ColumnDef,
    createAngularTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel, getSortedRowModel
} from '@tanstack/angular-table';
import {FormsModule} from '@angular/forms';
import {TablePagination} from '@app/components/Table/table-pagination';
import {TanstackTable} from '@app/components/Table/tanstack-table';
import {UiCard} from '@app/components/ui-card';
import {DocumentType} from '@/app/models/enums/document-type';
import {CompanyType} from '@/app/views/tables/tanstack/data';

@Component({
  selector: 'app-user-document-list',
    imports: [
        NgIcon,
        FormsModule,
        LucideAngularModule,
        TablePagination,
        TanstackTable,
        UiCard
    ],
  templateUrl: './user-document-list.component.html',
  styleUrl: './user-document-list.component.scss'
})
export class UserDocumentList implements OnInit {
   private readonly modalService = inject(NgbModal);

    canEdit = false;
    canDelete = false;
    canShowDetails = true;


    document?: CustomerDocument;
    documentId!: string;
    queryString: string = "";
    loading = false;
    error?: string;

    customerDocumentService : CustomerDocumentService = inject(CustomerDocumentService);

    customerDocuments: CustomerDocument[]  = [];

    columns : ColumnDef<CustomerDocument>[] = [ {
        accessorKey: 'id',
        header: 'ID',
        enableSorting: false,
        cell: info => info.getValue(),
    },
        {
            accessorKey: 'customerId',
            header: 'Customer',
            cell: info => info.getValue(),
            enableHiding: true,
            enableColumnFilter: true,
        }
        ,
        {
            accessorKey: 'documentNumber',
            header: 'Document Number',
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'documentType',
            header: 'Document Type',
            cell: info => info.getValue(),

        },
        {
            accessorKey: 'deliveryAuthority',
            header: 'Delivery Authority',
            cell: info => info.getValue(),

        },
        {
            accessorKey: 'issuedDate',
            header: 'Issue Date',
            cell: info => info.getValue(),

        },
        {
            accessorKey: 'expirationDate',
            header: 'Expiration Date',
            enableSorting: true,
            cell: info => info.getValue(),

        },
        {
            accessorKey: 'active',
            header: 'Active',
            enableSorting: true,
            cell: info => info.getValue(),

        },
        {
            accessorKey: 'createdAt',
            header: 'Creation',
            enableSorting: true,
            cell: info => info.getValue(),

        }
        ,
        {
            accessorKey: 'updatedAt',
            header: 'Last modification',
            enableSorting: true,
            cell: info => info.getValue(),
            enableHiding: true,

        },
        {
            id: 'actions',
            header: 'Actions',
            enableSorting: false,
            cell: () => null,
        }];

     tableData =  signal<CustomerDocument[]>(this.customerDocuments);
      openRoleModal(content: TemplateRef<any>) {
          this.modalService.open(content, {size: 'lg'});
      }



    ngOnInit(): void {
          this.findAll();

    }

    loadDocument(): void {
        this.loading = true;
        this.error = undefined;

        this.customerDocumentService.getDocumentById(this.documentId).subscribe({
            next: (data) => {
                this.document = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = err.message;
                this.loading = false;
                console.error('Erreur lors du chargement du document:', err);
            }
        });
    }

    findAll(): void {
        this.loading = true;
        this.error = undefined;
        this.customerDocumentService.findAll(this.queryString).subscribe({
            next: (response) => {
                this.customerDocuments = response.data;
                this.loading = false;
                this.tableData.update(()=>this.customerDocuments);
            },
            error: (err) => {
                this.error = err.message;
                this.loading = false;
                console.error('Erreur lors du chargement du document:', err);
            }
        });
    }

    table = createAngularTable<CustomerDocument>(() => ({
        data:  this.tableData(),
        columns: this.columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: 'includesString',
    }));

    setPageSize(size: number) {
        this.table.setPageSize(size);
    }

    protected readonly LucideSearch = LucideSearch;
    protected readonly Math = Math;
    protected readonly LucideTag = LucideTag;
    protected readonly LucideDollarSign = LucideDollarSign;
    deleteUser = (id: number) => {
        0
    };

}
