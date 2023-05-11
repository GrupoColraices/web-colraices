import { Header } from '@/components/Header'
import '../sass/main.scss'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
