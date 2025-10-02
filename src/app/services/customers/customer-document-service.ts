import {inject, Injectable} from '@angular/core';
import {CustomerDocument} from '@/app/interfaces/customers/customer-document';
import {Observable} from 'rxjs';
import {WebApiService} from '@/app/api/web-api.service';
import {API_URL, CUSTOMER_DOCUMENT_ENDPOINTS} from '@/app/interfaces/web-api/api.constants';
import {CustomerDocumentRequest} from '@/app/interfaces/customers/customer-document-request';

@Injectable({
  providedIn: 'root'
})
export class CustomerDocumentService {

    private readonly http: WebApiService = inject(WebApiService);

    /**
     * Récupère un document par son ID
     */
    getDocumentById(id: string): Observable<CustomerDocument> {
        const url = CUSTOMER_DOCUMENT_ENDPOINTS.BY_ID(id);
        return this.http.get<CustomerDocument>(url);
    }

    /**
     * Met à jour un document
     */
    updateDocument(id: string, request: CustomerDocumentRequest): Observable<CustomerDocument> {
        const url = CUSTOMER_DOCUMENT_ENDPOINTS.BY_ID(id);
        return this.http.put<CustomerDocument>(url, request);
    }

    /**
     * Supprime un document
     */
    deleteDocument(id: string): Observable<void> {
        const url = CUSTOMER_DOCUMENT_ENDPOINTS.BY_ID(id);
        return this.http.delete<void>(url);
    }

    /**
     * Récupère tous les documents d'un client
     */
    getDocumentsByCustomer(customerId: string): Observable<CustomerDocument[]> {
        const url = CUSTOMER_DOCUMENT_ENDPOINTS.BY_CUSTOMER(customerId);
        return this.http.get<CustomerDocument[]>(url);
    }

    /**
     * Vérifie un document
     */
    verifyDocument(id: string): Observable<CustomerDocument> {
        const url = CUSTOMER_DOCUMENT_ENDPOINTS.VERIFY(id);
        return this.http.post<CustomerDocument>(url, {});
    }

    findAll(queryString: string): Observable<any> {
        const url = CUSTOMER_DOCUMENT_ENDPOINTS.FIND_ALL(queryString);
        return this.http.get<CustomerDocument[]>(url);
    }

}
