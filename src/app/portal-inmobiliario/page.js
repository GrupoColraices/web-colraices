import { Banner } from "../portal-inmobiliario/Templates/Banner";
import { Eligenos } from "../portal-inmobiliario/Templates/Eligenos";
import { InmReciente } from "../portal-inmobiliario/Templates/InmReciente";
import { Testimoniales } from "../portal-inmobiliario/Templates/Testimoniales";
import { FeaturedProperties } from "../portal-inmobiliario/Templates/FeaturedProperties";
import { Toaster } from 'react-hot-toast';

export default function Home() {

  return (
    <>
      <Toaster containerStyle={{ zIndex: 10000000 }} position="top-right" />
      <Banner main />
      <FeaturedProperties />
      <InmReciente />
      <Eligenos />
      <Testimoniales />
    </>
  )
}


