import ClientPage from './ClientPage'
import { APIURL } from '../casas-apartamentos-colombia-desde-el-exterior/config'

export default async function DaviviendaFest() {
    const inmRecientes = await getinmRecientes()
    const articles = await getArticles()

    return <ClientPage inmRecientes={inmRecientes} articles={articles} />
}
export async function getinmRecientes() {
    try {
        const fetching = await fetch(`${APIURL}properties?web_section=global-fest`, {
            next: { revalidate: 0 },
            timeout: 10000, // 10 segundos de timeout
        })

        if (!fetching.ok) {
            console.warn('Error al obtener inmuebles recientes:', fetching.status, fetching.statusText)
            return []
        }

        const response = await fetching.json()
        return response?.data || []
    } catch (error) {
        console.error('Error fetching recent properties:', error)
        return [] // Retornar array vacío como fallback
    }
}

export async function getArticles() {
    try {
        const fetching = await fetch(`https://blog.colraices.com/api/v1/posts?category_id=8`, {
            next: { revalidate: 0 },
            timeout: 10000, // 10 segundos de timeout
        })

        if (!fetching.ok) {
            console.warn('Error al obtener artículos:', fetching.status, fetching.statusText)
            return []
        }

        const response = await fetching.json()
        return response?.data || []
    } catch (error) {
        console.error('Error fetching articles:', error)
        return [] // Retornar array vacío como fallback
    }
}
