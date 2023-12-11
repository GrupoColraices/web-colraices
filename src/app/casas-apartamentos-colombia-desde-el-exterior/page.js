import { Banner } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/Banner";
import { Eligenos } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/Eligenos";
import { InmReciente } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/InmReciente";
import { Testimoniales } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/Testimoniales";
import { FeaturedProperties } from "../casas-apartamentos-colombia-desde-el-exterior/Templates/FeaturedProperties";
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


