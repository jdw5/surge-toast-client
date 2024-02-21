import { router, usePage } from "@inertiajs/vue3"
import useToast from "./useToast"

const { toast: _toast } = useToast()

export default () => {
    router.on("finish", () => {
        const { toast: data }: { data: App.Data.Shared.ToastData | null } = usePage().props
        if (data) {
            _toast(data, {
                timeout: 5000,
            })
        }
    })
}
