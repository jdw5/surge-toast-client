import { router, usePage } from "@inertiajs/vue3"
import { useToast } from "./useToast"

const { toast: _toast } = useToast()

export const toast = () => {
    router.on("finish", () => {
        const { toast: data }: { data: ToastData | null } = usePage().props
        if (data) {
            _toast(data, {
                timeout: 5000,
            })
        }
    })
}
