import { redirect } from 'next/navigation'

const TOUR_BASE_PATH = '/casas-apartamentos-colombia-desde-el-exterior'

export default function RecommendedForYou() {
    redirect(TOUR_BASE_PATH)
}
