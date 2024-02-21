import type { ToastData, ToastOptions } from "./types"
import { useId } from "./id"
import { bus } from "./bus"

// Fallback properties implementing the ToastOptions interface
const fallback: ToastOptions = {
    type: "default",
    timeout: 3000,
}

export const useToast = () => {
    const toast = (data: ToastData) => {
        let msg = {
            ...fallback,
            ...data,
            id: useId(),
        }
        bus.emit("add", msg)

        setTimeout(() => {
            bus.emit("remove", msg.id)
        }, msg.timeout)
    }

    const success = (data: ToastData) => {
        toast({ ...data, type: "success" })
    }

    const error = (data: ToastData) => {
        toast({ ...data, type: "error" })
    }

    const warn = (data: ToastData) => {
        toast({ ...data, type: "warning" })
    }

    const info = (data: ToastData) => {
        toast({ ...data, type: "info" })
    }

    return {
        toast,
        success,
        error,
        warn,
        info,
    }
}