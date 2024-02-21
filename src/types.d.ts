export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';

export interface ToastOptions {
    type?: ToastType;
    timeout?: number;
}
export interface ToastData extends ToastOptions {
    title?: string;
    message?: string;
    custom?: object;
    id: string;
}
