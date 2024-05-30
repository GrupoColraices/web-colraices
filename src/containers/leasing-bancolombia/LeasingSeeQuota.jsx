import { Button } from "@/components/leasing-bancolombia/LeasingButton"
import "@/sass/containers/leasing-bancolombia/LeasingSeeQuota.scss"
export const LeasingSeeQuota = () => {
    return (
        <section className="container-see-quota">
            <div className="content-text">
                <h2>
                    ¿Cuánto te prestan con el
                    <span> nuevo leasing Bancolombia?
                    </span>
                </h2>
                <p>Recibe recomendaciones y cuotas de pago en solo dos minutos !Gratis por tiempo limitado!</p>
                <Button
                    text={"Ver cupo"}
                    URL={"https://colraices.com/credito-bancolombia-colombianos-en-el-exterior/"}
                />
            </div>
            <iframe width="574" height="348" src="https://www.youtube.com/embed/DtGgLj42qRk?si=RnWdyKelPhajvi6m&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>
    )
}
