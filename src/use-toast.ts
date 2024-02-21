import type { ToastData, ToastOptions } from "./types"
import { useId } from "./id"
import { ref } from "vue"

// Fallback properties implementing the ToastOptions interface
const fallback: ToastOptions = {
    type: "default",
    timeout: 3000,
}

export const useToast = () => {
    const toasts = ref<ToastData[]>([])

    const toast = (data: ToastData) => {
        let msg = {
            ...fallback,
            ...data,
            id: useId(),
        }
        toasts.value.push(msg)

        setTimeout(() => {
            remove(msg.id)
        }, msg.timeout)
    }

    const remove = (id: string) => {
        toasts.value = toasts.value.filter((t) => t.id !== id)
    }

    const removeByIndex = (index: number) => {
        toasts.value.splice(index, 1)
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
        toasts,
        remove,
        removeByIndex,
        toast,
        success,
        error,
        warn,
        info,
    }
}