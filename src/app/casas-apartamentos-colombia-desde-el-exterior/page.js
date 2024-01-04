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
      <Toaster containerStyle={{ zIndex: 10000000 }} position="top-right" />
      <Banner main />
      <FeaturedProperties />
      <InmReciente />
      <Eligenos />
      <Testimoniales />
    </>
  )
}


