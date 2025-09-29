import {Routes} from '@angular/router';
import { DocumentUserList } from './document-user-list/document-user-list';
import { DocumentCreate } from './document-create/document-create';

export const DOCS_USER: Routes = [
    {
        path: 'docs-user/create-document',
        component: DocumentCreate,
        data: {title: "Create Document"},
    },
    {
        path: 'docs-user/documents',
        component: DocumentUserList,
        data: {title: "Documents"},
    },
]