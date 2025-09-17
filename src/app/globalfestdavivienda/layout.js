import Script from 'next/script'

export default function GlobalFestLayout({ children }) {
    return (
        <>
            {/* Google Analytics solo para Global Fest Davivienda */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-J0LZMXRMWD" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-J0LZMXRMWD');
                `}
            </Script>
            {children}
        </>
    )
}
