import { router, usePage } from "@inertiajs/vue3"
import { useToast } from "./use-toast"
import type { ToastData } from "./types"

const { toast } = useToast()

export const plugin = () => {
    router.on("finish", () => {
        const data = usePage().props?.toast as ToastData

        if (data) toast(data)
    })
}
