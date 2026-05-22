export const OFFICIAL_MARKETING_URLS = Object.freeze({
    inicio: 'https://www.colraices.com',
    nosotros: 'https://www.colraices.com/nosotros',
    blog: 'https://www.colraices.com/blog',
    tourVivienda: 'https://www.colraices.com/tour-de-la-vivienda',
    hubFinanzas: 'https://www.colraices.com/finanzas-y-credito',
    brujulaFinanciera: 'https://www.colraices.com/brujula-financiera',
    brujulaCrediticia: 'https://www.colraices.com/brujula-crediticia',
    buenaData: 'https://www.colraices.com/buena-data',
    monetizacion: 'https://www.colraices.com/monetizacion',
    credito: 'https://www.colraices.com/credito-para-colombianos-en-el-exterior',
    hubInmueble: 'https://www.colraices.com/inversion-inmobiliaria',
    llaveInmobiliaria: 'https://www.colraices.com/llave-inmobiliaria',
    brujulaInmobiliaria: 'https://www.colraices.com/brujula-inmobiliaria',
    hubLegalMigratorio: 'https://www.colraices.com/legal-y-migratorio',
    asesoriaMigratoria: 'https://www.colraices.com/asesoria-migratoria',
    representacionLegal: 'https://www.colraices.com/representacion-legal-en-colombia',
    serviciosFiscales: 'https://www.colraices.com/servicios-fiscales',
    pensiones: 'https://www.colraices.com/pensiones',
    asesoriaEmprendimiento: 'https://www.colraices.com/emprender-en-colombia',
})

export const OFFICIAL_CONTACT_URLS = Object.freeze({
    asesoria: OFFICIAL_MARKETING_URLS.tourVivienda,
    phone: 'tel:+576013288939',
    email: 'mailto:info@colraices.co',
    whatsapp: 'https://wa.me/576013288939',
})

export const OFFICIAL_SOCIAL_URLS = Object.freeze({
    facebook: OFFICIAL_MARKETING_URLS.inicio,
    instagram: OFFICIAL_MARKETING_URLS.inicio,
    youtube: OFFICIAL_MARKETING_URLS.inicio,
    linkedin: OFFICIAL_MARKETING_URLS.inicio,
})

export const OFFICIAL_LEGAL_URLS = Object.freeze({
    politicaPrivacidad: `${OFFICIAL_MARKETING_URLS.inicio}/politica-de-privacidad`,
    terminosUso: `${OFFICIAL_MARKETING_URLS.inicio}/terminos-de-uso`,
    cookies: `${OFFICIAL_MARKETING_URLS.inicio}/cookies`,
})

export const OFFICIAL_FOOTER_URLS = Object.freeze({
    trabajaConNosotros: `${OFFICIAL_MARKETING_URLS.inicio}/trabaja-con-nosotros`,
})
