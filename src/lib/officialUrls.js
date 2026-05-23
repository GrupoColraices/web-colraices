const OFFICIAL_URL_BASE = (
    process.env.NEXT_PUBLIC_URL_BASE_NUEVA_WEB || 'https://colraices-web.vercel.app'
).replace(/\/$/, '')

const officialUrl = (path = '') => `${OFFICIAL_URL_BASE}${path}`

export const OFFICIAL_MARKETING_URLS = Object.freeze({
    inicio: officialUrl(),
    nosotros: officialUrl('/nosotros'),
    blog: officialUrl('/blog'),
    tourVivienda: officialUrl('/tour-de-la-vivienda'),
    hubFinanzas: officialUrl('/finanzas-y-credito'),
    brujulaFinanciera: officialUrl('/brujula-financiera'),
    brujulaCrediticia: officialUrl('/brujula-crediticia'),
    buenaData: officialUrl('/buena-data'),
    monetizacion: officialUrl('/monetizacion'),
    credito: officialUrl('/credito-para-colombianos-en-el-exterior'),
    hubInmueble: officialUrl('/inversion-inmobiliaria'),
    llaveInmobiliaria: officialUrl('/llave-inmobiliaria'),
    brujulaInmobiliaria: officialUrl('/brujula-inmobiliaria'),
    hubLegalMigratorio: officialUrl('/legal-y-migratorio'),
    asesoriaMigratoria: officialUrl('/asesoria-migratoria'),
    representacionLegal: officialUrl('/representacion-legal-en-colombia'),
    serviciosFiscales: officialUrl('/servicios-fiscales'),
    pensiones: officialUrl('/pensiones'),
    asesoriaEmprendimiento: officialUrl('/emprender-en-colombia'),
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
    politicaPrivacidad: officialUrl('/politica-de-privacidad'),
    terminosUso: officialUrl('/terminos-de-uso'),
    cookies: officialUrl('/cookies'),
})

export const OFFICIAL_FOOTER_URLS = Object.freeze({
    trabajaConNosotros: officialUrl('/trabaja-con-nosotros'),
})
