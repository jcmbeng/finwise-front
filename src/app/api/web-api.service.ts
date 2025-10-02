import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import {ErrorResponse} from '@/app/interfaces/reponses/error-response';
import {PageResponse} from '@/app/interfaces/web-api/page-response';

/**
 * Generic HTTP Client Service for making API calls
 *
 * @author Jean-Claude MBENG
 */
@Injectable({
    providedIn: 'root'
})
export class WebApiService {

    constructor(private http: HttpClient) {}

    /**
     * Performs a GET request
     *
     * @param url - The endpoint URL
     * @param options - Optional HTTP options
     * @returns Observable of the response
     */
    get<T>(url: string, options?: any): Observable<T> {
        return this.http.get<T>(url, { ...options, observe: 'body' as const }).pipe(
            catchError(this.handleError)
        ) as Observable<T>;
    }

    /**
     * Performs a POST request
     *
     * @param url - The endpoint URL
     * @param body - The request body
     * @param options - Optional HTTP options
     * @returns Observable of the response
     */
    post<T>(url: string, body: any, options?: any): Observable<T> {
        return this.http.post<T>(url, body, { ...options, observe: 'body' as const }).pipe(
            catchError(this.handleError)
        ) as Observable<T>;
    }

    /**
     * Performs a PUT request
     *
     * @param url - The endpoint URL
     * @param body - The request body
     * @param options - Optional HTTP options
     * @returns Observable of the response
     */
    put<T>(url: string, body: any, options?: any): Observable<T> {
        return this.http.put<T>(url, body, { ...options, observe: 'body' as const }).pipe(
            catchError(this.handleError)
        ) as Observable<T>;
    }

    /**
     * Performs a PATCH request
     *
     * @param url - The endpoint URL
     * @param body - The request body
     * @param options - Optional HTTP options
     * @returns Observable of the response
     */
    patch<T>(url: string, body: any, options?: any): Observable<T> {
        return this.http.patch<T>(url, body, { ...options, observe: 'body' as const }).pipe(
            catchError(this.handleError)
        ) as Observable<T>;
    }

    /**
     * Performs a DELETE request
     *
     * @param url - The endpoint URL
     * @param options - Optional HTTP options
     * @returns Observable of the response
     */
    delete<T>(url: string, options?: any): Observable<T> {
        return this.http.delete<T>(url, { ...options, observe: 'body' as const }).pipe(
            catchError(this.handleError)
        ) as Observable<T>;
    }

    /**
     * Performs a GET request with query parameters
     *
     * @param url - The endpoint URL
     * @param params - Query parameters as object
     * @param options - Optional HTTP options
     * @returns Observable of the response
     */
    getWithParams<T>(url: string, params: any, options?: any): Observable<T> {
        const httpParams = this.buildHttpParams(params);
        const mergedOptions = { ...options, params: httpParams };
        return this.get<T>(url, mergedOptions);
    }

    /**
     * Performs a GET request for paginated data
     *
     * @param url - The endpoint URL
     * @param page - Page number (0-indexed)
     * @param size - Page size
     * @param sort - Sort parameter (e.g., 'name,asc')
     * @param filters - Additional filter parameters
     * @returns Observable of paginated response
     */
    getPage<T>(
        url: string,
        page: number = 0,
        size: number = 10,
        sort?: string,
        filters?: any
    ): Observable<PageResponse<T>> {
        let params: any = {
            page: page.toString(),
            size: size.toString()
        };

        if (sort) {
            params.sort = sort;
        }

        if (filters) {
            params = { ...params, ...filters };
        }

        return this.getWithParams<PageResponse<T>>(url, params);
    }

    /**
     * Downloads a file from the server
     *
     * @param url - The endpoint URL
     * @param filename - The name for the downloaded file
     */
    downloadFile(url: string, filename: string): Observable<void> {
        return this.http.get(url, { responseType: 'blob' }).pipe(
            map((blob: Blob) => {
                const downloadUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = filename;
                link.click();
                window.URL.revokeObjectURL(downloadUrl);
            }),
            catchError(this.handleError)
        );
    }

    /**
     * Uploads a file to the server
     *
     * @param url - The endpoint URL
     * @param file - The file to upload
     * @param additionalData - Additional form data
     * @returns Observable of the response
     */
    uploadFile<T>(url: string, file: File, additionalData?: any): Observable<T> {
        const formData = new FormData();
        formData.append('file', file, file.name);

        if (additionalData) {
            Object.keys(additionalData).forEach(key => {
                formData.append(key, additionalData[key]);
            });
        }

        return this.post<T>(url, formData);
    }

    /**
     * Builds HttpParams from an object
     *
     * @param params - Object containing parameters
     * @returns HttpParams instance
     */
    private buildHttpParams(params: any): HttpParams {
        let httpParams = new HttpParams();

        if (params) {
            Object.keys(params).forEach(key => {
                const value = params[key];
                if (value !== null && value !== undefined && value !== '') {
                    if (Array.isArray(value)) {
                        value.forEach(item => {
                            httpParams = httpParams.append(key, item.toString());
                        });
                    } else {
                        httpParams = httpParams.append(key, value.toString());
                    }
                }
            });
        }

        return httpParams;
    }

    /**
     * Handles HTTP errors
     *
     * @param error - The HTTP error response
     * @returns Observable that throws an error
     */
    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage: ErrorResponse = {
            status: error.status,
            message: 'An error occurred',
            error: error.error
        };

        if (error.error instanceof ErrorEvent) {
            // Client-side or network error
            errorMessage.message = `Client Error: ${error.error.message}`;
        } else {
            // Backend error
            errorMessage.message = error.error?.message ||
                error.message ||
                `Server Error: ${error.status}`;
            errorMessage.timestamp = error.error?.timestamp;
            errorMessage.path = error.error?.path;
        }

        console.error('HTTP Error:', errorMessage);
        return throwError(() => errorMessage);
    }

    /**
     * Creates default headers for JSON requests
     *
     * @returns HttpHeaders with JSON content type
     */
    static createJsonHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }

    /**
     * Creates headers with authorization token
     *
     * @param token - The authorization token
     * @returns HttpHeaders with authorization
     */
    static createAuthHeaders(token: string): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        });
    }
}
