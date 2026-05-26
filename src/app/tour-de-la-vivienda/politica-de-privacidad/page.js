export const metadata = {
    title: 'Política de privacidad y tratamiento de datos personales',
    description:
        'Consulta la política de privacidad, tratamiento de datos personales, derechos de los titulares y canales de contacto de Colraices.',
}

export const dynamic = 'force-dynamic'

const sections = [
    {
        title: '1. Responsable del Tratamiento de Datos',
        paragraphs: [
            'COLRAICES es responsable del tratamiento de sus datos personales. Nos comprometemos a proteger su privacidad y a cumplir con la legislación aplicable en materia de protección de datos tanto en Colombia como en España.',
        ],
    },
    {
        title: '2. Datos que Recopilamos',
        paragraphs: [
            'Recopilamos los siguientes tipos de datos personales:',
        ],
        items: [
            'Datos de identificación: nombre, apellidos, documento de identidad',
            'Datos de contacto: dirección de correo electrónico, teléfono, dirección postal',
            'Datos financieros: información sobre ingresos, historial crediticio cuando aplique',
            'Datos de navegación: cookies, dirección IP, comportamiento en el sitio web',
        ],
    },
    {
        title: '3. Finalidad del Tratamiento',
        paragraphs: [
            'Sus datos personales serán utilizados para:',
        ],
        items: [
            'Prestar los servicios financieros, inmobiliarios y legales solicitados',
            'Procesar solicitudes de crédito hipotecario y evaluar viabilidad crediticia',
            'Gestionar la compra, venta y arrendamiento de inmuebles',
            'Enviar comunicaciones comerciales sobre nuestros servicios',
            'Cumplir con obligaciones legales y regulatorias',
            'Mejorar nuestros servicios mediante análisis estadísticos',
        ],
    },
    {
        title: '4. Base Legal del Tratamiento',
        paragraphs: [
            'El tratamiento de sus datos se basa en:',
        ],
        items: [
            'Su consentimiento expreso',
            'La ejecución de un contrato en el que usted es parte',
            'El cumplimiento de obligaciones legales aplicables',
            'Intereses legítimos de COLRAICES',
        ],
    },
    {
        title: '5. Compartir Datos con Terceros',
        paragraphs: [
            'Sus datos pueden ser compartidos con:',
        ],
        items: [
            'Entidades bancarias Banco Davivienda, Banco Unión para procesamiento de créditos',
            'Constructoras e inmobiliarias para gestión de proyectos',
            'Proveedores de servicios legales y migratorios',
            'Autoridades competentes cuando la ley lo requiera',
        ],
    },
    {
        title: '6. Sus Derechos',
        paragraphs: [
            'Usted tiene derecho a:',
        ],
        items: [
            'Acceder a sus datos personales',
            'Rectificar datos inexactos o incompletos',
            'Solicitar la supresión de sus datos',
            'Oponerse al tratamiento de sus datos',
            'Solicitar la limitación del tratamiento',
            'Portabilidad de datos',
            'Revocar su consentimiento en cualquier momento',
        ],
    },
    {
        title: '7. Seguridad de los Datos',
        paragraphs: [
            'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, pérdida, destrucción o alteración.',
        ],
    },
    {
        title: '8. Conservación de Datos',
        paragraphs: [
            'Sus datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades descritas y las obligaciones legales aplicables.',
        ],
    },
    {
        title: '9. Contacto',
        paragraphs: [
            'Para ejercer sus derechos o resolver dudas sobre esta política, puede contactarnos en:',
        ],
        items: [
            'Email: info@colraices.co',
            'Teléfono: (+57) 601 917 6737',
        ],
    },
]

export default function TourPrivacyPolicyPage() {
    return (
        <section className="tour-privacy-policy">
            <header className="tour-privacy-policy__hero">
                <div className="tour-privacy-policy__hero-content">
                    <p className="tour-privacy-policy__eyebrow">Colraices</p>
                    <h1>Política de Privacidad</h1>
                    <p className="tour-privacy-policy__date">Última actualización: Abril 2026</p>
                </div>
            </header>

            <article className="tour-privacy-policy__content">
                <p className="tour-privacy-policy__intro">
                    Esta página reúne la información principal sobre privacidad, tratamiento de datos personales,
                    derechos de los titulares y canales de contacto de Colraices.
                </p>

                {sections.map((section) => (
                    <section className="tour-privacy-policy__section" key={section.title}>
                        <h2>{section.title}</h2>

                        {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}

                        {section.items && (
                            <ul>
                                {section.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
            </article>
        </section>
    )
}
