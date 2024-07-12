import '../sass/main.scss'
import { Footer } from '../components/Footer'
import { Montserrat } from 'next/font/google'
import { Scripts } from '@/helpers/Scripts'
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={montserrat.className}>
                <Scripts />
                {children}
                <Footer />
            </body>
        </html>
    )
}
