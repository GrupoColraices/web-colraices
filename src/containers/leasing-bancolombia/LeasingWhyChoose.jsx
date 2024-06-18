import { Button } from "@/components/leasing-bancolombia/LeasingButton"
import { LeasingChooseItems } from "@/components/leasing-bancolombia/LeasingChooseItems"
import "@/sass/containers/leasing-bancolombia/LeasingWhyChoose.scss"
import { chooseItems } from "@/helpers"


export const LeasingWhyChoose = () => {
    return (
        <section className="container-why-choose">
            <div className="content-text">
                <h2>
                    ¿Por qué eligir el nuevo leasing habitacional
                    <span> de Bancolombia con Colraices?</span>
                </h2>
                <Button
                    text={"Solicita tu leasing"}
                    URL={"https://colraices.com/credito-bancolombia-colombianos-en-el-exterior/"}
                />
            </div>
            <div className="content-items">
                {chooseItems.map((item) =>
                    <LeasingChooseItems key={item.id} data={item} />
                )}
                <Button
                    text={"Solicita tu leasing"}
                    URL={"https://colraices.com/credito-bancolombia-colombianos-en-el-exterior/"}
                />
            </div>

        </section>
    )
}
