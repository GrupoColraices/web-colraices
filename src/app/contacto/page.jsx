import { Header } from "@/components/Header"
import { ItemFormResultado } from "@/components/ItemFormResultado"
import '@/sass/containers/contacto/contacto.scss'

export const metadata = {
    title: " Comprar casa en Colombia desde el exterior | Te contactamos"
}
export default function Contacto() {
    return (
        <>
            <Header />
            <section className="contacto">
                <ItemFormResultado />
            </section>
        </>

    )
}
