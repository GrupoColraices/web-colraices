import Script from 'next/script'

export const Scripts = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CVV2GJKD7D" />
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CVV2GJKD7D');`}
            </Script>

            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        ! function (f, b, e, v, n, t, s) {
                            if (f.fbq) return;
                            n = f.fbq = function () {
                                n.callMethod ?
                                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                            };
                            if (!f._fbq) f._fbq = n;
                            n.push = n;
                            n.loaded = !0;
                            n.version = '2.0';
                            n.queue = [];
                            t = b.createElement(e);
                            t.async = !0;
                            t.src = v;
                            s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s)
                        }(window, document, 'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '572109847507646');
            fbq('track', 'PageView');
            `,
                }}
            />

            <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=572109847507646&ev=PageView&noscript=1" /></noscript>
            <Script id='HotJarAnalytics'
                dangerouslySetInnerHTML={{
                    __html: `(function (h, o, t, j, a, r) {
                    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                    h._hjSettings = { hjid: 1702700, hjsv: 6 };
                    a = o.getElementsByTagName('head')[0];
                    r = o.createElement('script'); r.async = 1;
                    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');`}} />
        </>
    )
}
