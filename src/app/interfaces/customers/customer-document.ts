/**
 * Interface representing a Customer Document
 *
 * @author Jean-Claude MBENG
 */
export interface CustomerDocument {
     id? : string;
    documentId? : string;
    customerId? : string;
    documentNumber? : string;
    documentType? : string;
    deliveryAuthority? : string;
    issuedDate? : string;
    expirationDate? : string;
    active? : boolean;
    createdAt? : string;
    updatedAt? : string;
}
