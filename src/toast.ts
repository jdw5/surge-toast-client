import { router, usePage } from "@inertiajs/vue3"
import { useToast } from "./use-toast"
export type { ToastData } from "./types"

const { toast } = useToast()

export const plugin = () => {
    router.on("finish", () => {
        const { toast: data }: { data: ToastData } = usePage().props
        if (data) toast(data)
    })
}
