export const dynamic = 'force-dynamic'

import dynamicImport from 'next/dynamic'

const ClientPage = dynamicImport(() => import('./clientPage'), { ssr: false })

export default function PagosPage() {
    return <ClientPage />
}
