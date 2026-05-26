import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const TOUR_BASE_PATH = '/tour-de-la-vivienda'

export default function CompareProperties() {
    redirect(TOUR_BASE_PATH)
}
