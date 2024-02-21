import type { ToastData } from "./types"
import { useId } from "./id"
import { bus } from "./bus"

export const useToast = () => {
    const _toast = (data: ToastData) => {
        toastOptions.value = { ...toastOptions.value, ...options }
        toastOptions.value.id = useId()
        toastOptions.value.data = data
        bus.emit("add", toastOptions.value)

        setTimeout(() => {
            bus.emit("remove", toastOptions.value.id)
        }, toastOptions.value.timeout)
    }

    const toast = () => {

    }

    const success = () => {

    }

    const error = () => {

    }

    const warn = () => {

    }

    const info = () => {

    }

    return {
        toast,
        success,
        error,
        warn,
        info,
        data: computed(() => toastOptions.value.data),
    }
}