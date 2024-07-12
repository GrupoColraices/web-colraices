import { ButtonFavorite } from "../components/ButtonFavorite";


export const TitleInmueble = ({ titulo, region, ciudad, tipo_inmueble, inmueble, discountRate, isInFair, fairMode }) => {
  return (
    <article className='title__inmueble'>
      <div>
        <h3 className='title__inmueble__title'>{titulo}</h3>
        <h2 className='title__inmueble__subtitle'>{tipo_inmueble} en venta en {ciudad}</h2>
        <div className='title__inmueble__location'>
          <img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/location.svg" alt="Icon map" />
          <p>{ciudad} - {region}</p>
        </div>
      </div>
      {isInFair && fairMode && <p className="price__off"><span>-{discountRate.toFixed(0)}% OFF</span></p>}
      <ButtonFavorite inmueble={inmueble} />
    </article>
  )
}
