import React from 'react'

export const FinancingSteps = () => {
    return (
        <section className="financing-steps">
            <h2>
                Paso a paso para tu <span>casa en Colombia</span>
            </h2>
            <ul>
                <li>
                    <img src="/img/financia/financing-steps-container-1.svg" alt="" />
                    <div>
                        <p>1</p>
                    </div>
                    <p>
                        <span>Análisis Inicial</span>Te entregamos tu cupo de crédito y te recomendamos la mejor opción
                        para financiar tu casa.
                    </p>
                </li>
                <li>
                    <img src="/img/financia/financing-steps-container-2.svg" alt="" />
                    <div>
                        <p>2</p>
                    </div>
                    <p>
                        <span>Entrega tus documentos</span>Te solicitamos los documentos que el banco requiere para
                        avanzar con tu solicitud
                    </p>
                </li>
                <li>
                    <img src="/img/financia/financing-steps-container-3.svg" alt="" />
                    <div>
                        <p>3</p>
                    </div>
                    <p>
                        <span>Aprobación</span>
                        Presentamos tu solicitud al banco que elegiste para obtener tu crédito aprobado.
                    </p>
                </li>
                <li>
                    <img src="/img/financia/financing-steps-container-4.svg" alt="" />
                    <div>
                        <p>4</p>
                    </div>
                    <p>
                        <span>Legalización y desembolso</span>
                        Te acompañamos en todos los trámites legales para que tu crédito se desembolse y recibas tu
                        casa.
                    </p>
                </li>
            </ul>
        </section>
    )
}
