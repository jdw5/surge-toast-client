import { router, usePage } from "@inertiajs/vue3"
import { useToast } from "./use-toast"
export type { ToastData } from "./types"

const { toast } = useToast()

export const plugin = () => {
    router.on("finish", () => {
        const pageProps = usePage().props
        
        if ("toast" in pageProps) {
            const { toast: data } = pageProps.toast as { toast: ToastData }

            if (data) toast(data)
        }
    })
}
