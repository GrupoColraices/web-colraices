import Script from "next/script";
import { Toaster } from "react-hot-toast";
import FeaturedProperties from "../Templates/FeaturedProperties";
import { Reasons } from "../Templates/Reasons";
import { PreaprobadoExpress } from "../Templates/PreaprobadoExpress";
import { Eligenos } from "../Templates/Eligenos";
import { Testimoniales } from "../Templates/Testimoniales";
import { InmReciente } from "../Templates/InmReciente";
import { Banner } from "../Templates/Banner";
import { APIURL } from "../config";


export default async function Page() {
    const inmFeatured = await getinmFeatured();
    const inmRecientes = await getinmRecientes();
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-03VJLYKNTV" />
            <Script id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: ` window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-03VJLYKNTV');`}} />
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
            <FeaturedProperties inmFeatured={inmFeatured} />
            <InmReciente inmRecientes={inmRecientes} />
            <Reasons />
            <PreaprobadoExpress />
            <Eligenos />
            <Testimoniales />
        </>
    )
}
export async function getinmFeatured() {
    const fetching = await fetch(`${APIURL}likes`);
    const response = await fetching.json();
    return response?.data;
}
export async function getinmRecientes() {
    const fetching = await fetch(`${APIURL}properties`);
    const response = await fetching.json();
    return response?.data;
}