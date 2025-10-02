// generic-http.service.ts

import {  HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Interface for HTTP request options
 */
export interface HttpOptions {
    headers?: HttpHeaders | { [header: string]: string | string[] };
    params?: HttpParams | { [param: string]: string | string[] };
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
    observe?: 'body' | 'response';
    withCredentials?: boolean;
}
