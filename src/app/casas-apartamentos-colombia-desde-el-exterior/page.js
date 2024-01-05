import { Banner } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/Banner";
import { Eligenos } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/Eligenos";
import { InmReciente } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/InmReciente";
import { Testimoniales } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/Testimoniales";
import { FeaturedProperties } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/FeaturedProperties";
import { Toaster } from 'react-hot-toast';
import Script from "next/script";


export default function Home() {

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-03VJLYKNTV" />
        <Script id="google-analytics">
            {` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-03VJLYKNTV');`}
        </Script>

        <Script id='HotJarAnalytics'
            dangerouslySetInnerHTML={{
                __html: `(function (h, o, t, j, a, r) {
                    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                    h._hjSettings = { hjid: 3262680, hjsv: 6 };
                    a = o.getElementsByTagName('head')[0];
                    r = o.createElement('script'); r.async = 1;
                    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');`}} />
      <Toaster containerStyle={{ zIndex: 10000000 }} position="top-right" />
      <Banner main />
      <FeaturedProperties />
      <InmReciente />
      <Eligenos />
      <Testimoniales />
    </>
  )
}


