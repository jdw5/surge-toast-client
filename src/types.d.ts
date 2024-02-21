
export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';

export interface ToastData {
    id: string;
    type?: ToastType;
    title?: string;
    timeout?: number;
}
