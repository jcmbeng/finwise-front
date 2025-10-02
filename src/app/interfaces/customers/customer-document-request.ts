/**
 * Interface for creating or updating a Customer Document
 */
export interface CustomerDocumentRequest {
    customerId: string;
    documentNumber: string;
    documentType: DocumentType;
    issuedDate: string;
    expirationDate: string;
    deliveryAuthority: string;
    active: boolean;
}
