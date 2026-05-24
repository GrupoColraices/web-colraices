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
    whatsapp:
        'https://api.whatsapp.com/send/?phone=15136479405&text=Hola%2C+Colraices.+Estoy+fuera+de+Colombia%2C+vengo+desde+la+p%C3%A1gina+web+y+quiero+orientaci%C3%B3n+para+transformar+mi+remesa+en+patrimonio+a+largo+plazo&type=phone_number&app_absent=0',
})

export const OFFICIAL_SOCIAL_URLS = Object.freeze({
    facebook: 'https://www.facebook.com/colraices',
    instagram: 'https://www.instagram.com/colraices/',
    youtube: 'https://www.youtube.com/@colraices_canal_oficial',
    linkedin: 'https://www.linkedin.com/company/colraices',
})

export const OFFICIAL_LEGAL_URLS = Object.freeze({
    politicaPrivacidad: officialUrl('/politica-de-privacidad'),
    terminosUso: officialUrl('/terminos-de-uso'),
    cookies: officialUrl('/cookies'),
})

export const OFFICIAL_FOOTER_URLS = Object.freeze({
    trabajaConNosotros: officialUrl('/trabaja-con-nosotros'),
})
