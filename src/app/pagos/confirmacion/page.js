export const dynamic = 'force-dynamic'

import dynamicImport from 'next/dynamic'

const ConfirmationClient = dynamicImport(() => import('./ConfirmationClient'), { ssr: false })

export default function ConfirmacionPage() {
    return <ConfirmationClient />
}
