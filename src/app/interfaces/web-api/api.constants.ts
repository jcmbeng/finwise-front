// api.constants.ts

import { environment } from 'src/environments/environment';
import * as querystring from 'node:querystring';

/**
 * Base API URL configuration
 */
export const API_CONFIG = {
    BASE_URL: environment.apiUrl || 'http://localhost:8080',
    API_VERSION: '/api/v1',
    TIMEOUT: 30000, // 30 seconds
};

/**
 * Complete API URL
 */
export const API_URL = `${API_CONFIG.BASE_URL}${API_CONFIG.API_VERSION}`;

/**
 * Customer API Endpoints
 */
export const CUSTOMER_ENDPOINTS = {
    BASE: `${API_URL}/customers`,
    BY_ID: (id: string) => `${API_URL}/customers/${id}`,
    ACTIVATE: (id: string) => `${API_URL}/customers/${id}/activate`,
    DEACTIVATE: (id: string) => `${API_URL}/customers/${id}/deactivate`,
    VERIFY_KYC: (id: string) => `${API_URL}/customers/${id}/verify-kyc`,
    BY_PHONE: (phoneNumber: string) => `${API_URL}/customers/phone/${phoneNumber}`,
    BY_EMAIL: (email: string) => `${API_URL}/customers/email/${email}`,
    SEARCH: `${API_URL}/customers/search`,
    EXPORT: `${API_URL}/customers/export`,
};

/**
 * Customer Document API Endpoints
 */
export const CUSTOMER_DOCUMENT_ENDPOINTS = {
    BASE: `${API_URL}/customer-documents`,
    FIND_ALL: (queryString: string) => `${API_URL}/customer-documents${queryString}`,
    BY_ID: (id: string) => `${API_URL}/customer-documents/${id}`,
    BY_CUSTOMER: (customerId: string) => `${API_URL}/customer-documents/customer/${customerId}`,
    ACTIVE: (customerId: string) => `${API_URL}/customer-documents/customer/${customerId}/active`,
    VERIFY: (id: string) => `${API_URL}/customer-documents/${id}/verify`,
    UPLOAD: `${API_URL}/customer-documents/upload`,
};

/**
 * Account API Endpoints
 */
export const ACCOUNT_ENDPOINTS = {
    BASE: `${API_URL}/accounts`,
    BY_ID: (id: string) => `${API_URL}/accounts/${id}`,
    BY_CUSTOMER: (customerId: string) => `${API_URL}/accounts/customer/${customerId}`,
    BY_NUMBER: (accountNumber: string) => `${API_URL}/accounts/number/${accountNumber}`,
    BALANCE: (id: string) => `${API_URL}/accounts/${id}/balance`,
    TRANSACTIONS: (id: string) => `${API_URL}/accounts/${id}/transactions`,
    FREEZE: (id: string) => `${API_URL}/accounts/${id}/freeze`,
    UNFREEZE: (id: string) => `${API_URL}/accounts/${id}/unfreeze`,
};

/**
 * Transaction API Endpoints
 */
export const TRANSACTION_ENDPOINTS = {
    BASE: `${API_URL}/transactions`,
    BY_ID: (id: string) => `${API_URL}/transactions/${id}`,
    DEPOSIT: `${API_URL}/transactions/deposit`,
    WITHDRAWAL: `${API_URL}/transactions/withdrawal`,
    TRANSFER: `${API_URL}/transactions/transfer`,
    BY_ACCOUNT: (accountId: string) => `${API_URL}/transactions/account/${accountId}`,
    BY_REFERENCE: (reference: string) => `${API_URL}/transactions/reference/${reference}`,
    HISTORY: `${API_URL}/transactions/history`,
};

/**
 * Authentication API Endpoints
 */
export const AUTH_ENDPOINTS = {
    LOGIN: `${API_URL}/auth/login`,
    LOGOUT: `${API_URL}/auth/logout`,
    REGISTER: `${API_URL}/auth/register`,
    REFRESH_TOKEN: `${API_URL}/auth/refresh`,
    FORGOT_PASSWORD: `${API_URL}/auth/forgot-password`,
    RESET_PASSWORD: `${API_URL}/auth/reset-password`,
    CHANGE_PASSWORD: `${API_URL}/auth/change-password`,
    VERIFY_EMAIL: `${API_URL}/auth/verify-email`,
};

/**
 * User API Endpoints
 */
export const USER_ENDPOINTS = {
    BASE: `${API_URL}/users`,
    BY_ID: (id: string) => `${API_URL}/users/${id}`,
    PROFILE: `${API_URL}/users/profile`,
    UPDATE_PROFILE: `${API_URL}/users/profile`,
    ROLES: `${API_URL}/users/roles`,
    PERMISSIONS: `${API_URL}/users/permissions`,
};

/**
 * Group API Endpoints
 */
export const GROUP_ENDPOINTS = {
    BASE: `${API_URL}/groups`,
    BY_ID: (id: string) => `${API_URL}/groups/${id}`,
    MEMBERS: (id: string) => `${API_URL}/groups/${id}/members`,
    ADD_MEMBER: (id: string) => `${API_URL}/groups/${id}/members`,
    REMOVE_MEMBER: (id: string, memberId: string) => `${API_URL}/groups/${id}/members/${memberId}`,
    BY_CUSTOMER: (customerId: string) => `${API_URL}/groups/customer/${customerId}`,
};

/**
 * Loan API Endpoints
 */
export const LOAN_ENDPOINTS = {
    BASE: `${API_URL}/loans`,
    BY_ID: (id: string) => `${API_URL}/loans/${id}`,
    BY_CUSTOMER: (customerId: string) => `${API_URL}/loans/customer/${customerId}`,
    APPLY: `${API_URL}/loans/apply`,
    APPROVE: (id: string) => `${API_URL}/loans/${id}/approve`,
    REJECT: (id: string) => `${API_URL}/loans/${id}/reject`,
    REPAYMENT: (id: string) => `${API_URL}/loans/${id}/repayment`,
    SCHEDULE: (id: string) => `${API_URL}/loans/${id}/schedule`,
};

/**
 * Report API Endpoints
 */
export const REPORT_ENDPOINTS = {
    BASE: `${API_URL}/reports`,
    CUSTOMERS: `${API_URL}/reports/customers`,
    TRANSACTIONS: `${API_URL}/reports/transactions`,
    ACCOUNTS: `${API_URL}/reports/accounts`,
    LOANS: `${API_URL}/reports/loans`,
    FINANCIAL: `${API_URL}/reports/financial`,
    EXPORT: `${API_URL}/reports/export`,
};

/**
 * Notification API Endpoints
 */
export const NOTIFICATION_ENDPOINTS = {
    BASE: `${API_URL}/notifications`,
    BY_ID: (id: string) => `${API_URL}/notifications/${id}`,
    UNREAD: `${API_URL}/notifications/unread`,
    MARK_READ: (id: string) => `${API_URL}/notifications/${id}/read`,
    MARK_ALL_READ: `${API_URL}/notifications/read-all`,
    DELETE: (id: string) => `${API_URL}/notifications/${id}`,
};

/**
 * All API Endpoints combined
 */
export const API_ENDPOINTS = {
    CUSTOMERS: CUSTOMER_ENDPOINTS,
    DOCUMENTS: CUSTOMER_DOCUMENT_ENDPOINTS,
    ACCOUNTS: ACCOUNT_ENDPOINTS,
    TRANSACTIONS: TRANSACTION_ENDPOINTS,
    AUTH: AUTH_ENDPOINTS,
    USERS: USER_ENDPOINTS,
    GROUPS: GROUP_ENDPOINTS,
    LOANS: LOAN_ENDPOINTS,
    REPORTS: REPORT_ENDPOINTS,
    NOTIFICATIONS: NOTIFICATION_ENDPOINTS,
};

/**
 * HTTP Headers
 */
export const HTTP_HEADERS = {
    CONTENT_TYPE_JSON: { 'Content-Type': 'application/json' },
    CONTENT_TYPE_FORM: { 'Content-Type': 'application/x-www-form-urlencoded' },
    CONTENT_TYPE_MULTIPART: { 'Content-Type': 'multipart/form-data' },
    ACCEPT_JSON: { 'Accept': 'application/json' },
};

/**
 * Local Storage Keys
 */
export const STORAGE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    REFRESH_TOKEN: 'refresh_token',
    USER_DATA: 'user_data',
    LANGUAGE: 'app_language',
    THEME: 'app_theme',
    REMEMBER_ME: 'remember_me',
};

/**
 * Query Parameter Keys
 */
export const QUERY_PARAMS = {
    PAGE: 'page',
    SIZE: 'size',
    SORT: 'sort',
    SEARCH: 'search',
    FILTER: 'filter',
    FROM_DATE: 'fromDate',
    TO_DATE: 'toDate',
};

/**
 * Default Pagination Values
 */
export const PAGINATION = {
    DEFAULT_PAGE: 0,
    DEFAULT_SIZE: 10,
    PAGE_SIZE_OPTIONS: [5, 10, 20, 50, 100],
    DEFAULT_SORT: 'createdAt,desc',
};
