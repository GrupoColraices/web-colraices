import React from 'react'
import ItemFavorite from '../molecules/ItemFavorite'
import { SummaryFavorite } from '../components/SummaryFavorite';

export const CompareFavorites = ({ selectedItems }) => {
  const isSmallScreen = window.innerWidth <= 930;
  const visibleItems = isSmallScreen ? selectedItems.slice(0, 2) : selectedItems;

  const getCities = (visibleItems) => visibleItems.map(item => item.ciudad)
  const area_const = [visibleItems[0].area_const, visibleItems[1].area_const];
  const precio = [visibleItems[0].precio, visibleItems[1].precio];

  return (
    <section className='display-comparison'>
      <div className='container-cards-property'>
        {visibleItems?.map(item => (
          <ItemFavorite key={item.id} itemProperty={item} />
        ))}
      </div>
      <div className='container-summary-details'>
        <SummaryFavorite icon={""} title={"Ubicación"} content={getCities(visibleItems)} />
        <SummaryFavorite icon={""} title={"Precio Desde"} content={precio} />
        {/* <SummaryFavorite icon={""} title={"Características"} content={area_const} />
        <SummaryFavorite icon={""} title={"Precio Desde"} content={precio} /> */}
      </div>
    </section>

  )
}
