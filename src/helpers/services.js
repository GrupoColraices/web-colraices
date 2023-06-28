export const services = [
    [
        { id: 1, name: 'Cupo crédito', price: 10, quantity: 1, additional: false },
        { id: 2, name: 'Cupo crédito pro', price: 9, quantity: 1, additional: false },
        { id: 3, name: 'Pre-aprobado', price: 8, quantity: 1, additional: false },
        { id: 4, name: 'Crédito', price: 8, quantity: 1, additional: false },
        { id: 5, name: 'Cuenta ahorro', price: 8, quantity: 1, additional: false },
        { id: 6, name: 'Monetización', price: 8, quantity: 1, additional: false },
    ],
    [
        { id: 7, name: 'Buena Data Básico', price: 35, quantity: 1, additional: false },
        { id: 8, name: 'Buena Data Estandar', price: 48, quantity: 1, additional: false },
        { id: 9, name: 'Buena Data Premium', price: 110, quantity: 1, additional: false },
        { id: 10, name: 'Buena Data gestión de pago y paz y salvo', price: 5, quantity: 1, additional: true },
        { id: 11, name: 'Buena Data gestión reportes negativos extra', price: 30, quantity: 1, additional: true },
    ],
    [{ id: 12, name: 'Reserva de inmueble', price: 10, quantity: 1, additional: false }],
]

export const payU = {
    apiKey: '4Vj8eK4rloUd272L48hsrarnUA',
    merchantId: '508029',
    accountId: '512321',
    referenceCode: `ServiciosColraices${Date.now()}`,
}

//export const BASE_URL = 'http://localhost:3000'
export const BASE_URL = 'https://colraices-site.vercel.app'
