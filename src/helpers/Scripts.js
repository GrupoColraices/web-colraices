"use client"
import Script from 'next/script'
import { useEffect } from 'react';

export const Scripts = () => {
    useEffect(() => {
        const redirectScript = () => {
            var due_date = new Date('2024-07-18');
            var days_deadline = 10;

            var current_date = new Date();
            var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
            var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
            var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

            if (days > 0) {
                var days_late = days_deadline - days;
                var opacity = (days_late * 100 / days_deadline) / 100;
                opacity = (opacity < 0) ? 0 : opacity;
                opacity = (opacity > 1) ? 1 : opacity;
                if (opacity >= 0 && opacity <= 1) {
                    document.getElementsByTagName("BODY")[0].style.opacity = opacity;
                }
            }
        };

        redirectScript();
    }, []);
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
