import { Button } from "@/components/gestionamos-tu-credito/Button";
import { Card } from "@/components/gestionamos-tu-credito/Card"
import { TitleSection } from "../../components/gestionamos-tu-credito/TitleSection";
import { Partners } from "@/components/Partners";
import { partners } from "@/helpers";
import '@/sass/containers/gestionamos-tu-credito/BankLoan.scss';
export const BankLoan = () => {
    return (
        <section className="container-bank-loan" id="bank-loank">
            <div className="content-bank-loan">
                <div className="content-cards">
                    <Card text={"GRATIS"} icon={"cash-in-hand"} position={"left"} />
                    <Card text={"SIN ESPERAS"} icon={"clock"} position={"center"} color={"primary"} />
                    <Card text={"SIN PAPELEOS"} icon={"paperwork"} position={"right"} />
                </div>
                <div className="content-text">
                    <h2>¿Cuánto me prestan los<span> bancos en Colombia?</span></h2>
                    <p>Te damos el resultado en <span>2 minutos </span>
                        con Cupo de Crédito</p>
                    <Button text={"Ver  mi cupo"} URL={"https://colraices.com/cupocreditoalinstante"} target={"_blank"} />
                </div>
            </div>
            <TitleSection text={"Te decimos cuánto puedes obtener, qué necesitas y"} span={"el valor de tu cuota con nuestros bancos aliados"} />
            <Partners partners={partners} hover={true} customClass={"partners-managing-your-credit"} />
        </section>
    )
}
