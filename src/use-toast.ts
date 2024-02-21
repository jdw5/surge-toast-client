import type { ToastData, ToastType } from "./toast"
import useId from "./id"
import bus from "./bus"

export default () => {
    const toast = (data: ToastData) => {
        toastOptions.value = { ...toastOptions.value, ...options }
        toastOptions.value.id = useId()
        toastOptions.value.data = data
        bus.emit("add", toastOptions.value)

        setTimeout(() => {
            bus.emit("remove", toastOptions.value.id)
        }, toastOptions.value.timeout)
    }

    return {
        toast,
        data: computed(() => toastOptions.value.data),
    }
}