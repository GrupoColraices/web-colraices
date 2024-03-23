import { Header } from "@/components/Header"
import { ItemFormResultado } from "@/components/ItemFormResultado"
import '@/sass/containers/contacto/AssistedSearch.scss'

export const metadata = {
    title: " Comprar casa en Colombia desde el exterior | Te contactamos"
}
export default function AssistedSearch() {
    return (
        <>
            <Header />
            <section className="assisted-search">
                <ItemFormResultado />
            </section>
        </>

    )
}
