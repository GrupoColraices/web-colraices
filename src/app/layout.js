import '../sass/main.scss'
import { Montserrat } from 'next/font/google'
import { Providers } from './providers'
import { ConditionalLayout } from './ConditionalLayout'
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {
    return (

        <html lang="en" suppressHydrationWarning>
            <body className={montserrat.className}>
                <Providers>
                    <ConditionalLayout>
                        {children}
                    </ConditionalLayout>
                </Providers>
            </body>
        </html>
    )
}
