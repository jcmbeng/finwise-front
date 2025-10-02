import {Routes} from '@angular/router';
import { UserDocumentList } from './document-user-list/user-document-list.component';
import { DocumentCreate } from '@/app/views/customers/documents/document-create/document-create';

export const CUSTOMER_DOCUMENTS: Routes = [
    {
        path: 'customers/documents/create-document',
        component: DocumentCreate,
        data: {title: "Create Document"},
    },
    {
        path: 'customers/documents',
        component: UserDocumentList,
        data: {title: "Documents"},
    },
]
