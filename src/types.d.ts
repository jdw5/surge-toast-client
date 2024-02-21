export type ToastType = 'success' | 'error' | 'warn' | 'info' | 'default';

export interface ToastOptions {
    type?: ToastType;
    timeout?: number;
}
export interface ToastData extends ToastOptions {
    title?: string;
    message?: string;
    more?: any;
    id: string;
}
