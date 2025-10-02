/**
 * Interface for error response
 */
export interface ErrorResponse {
    status: number;
    message: string;
    error?: any;
    timestamp?: string;
    path?: string;
}
