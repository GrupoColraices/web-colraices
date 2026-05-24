import { redirect } from 'next/navigation'

const TOUR_BASE_PATH = '/tour-de-la-vivienda'

export default function PageFavoritos() {
    redirect(TOUR_BASE_PATH)
}
