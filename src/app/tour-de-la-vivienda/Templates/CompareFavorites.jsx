
import React, { useState, useEffect } from 'react';
import ItemFavorite from '../molecules/ItemFavorite';
import { SummaryFavorite } from '../components/SummaryFavorite';
import { BsWhatsapp } from "react-icons/bs";

export const CompareFavorites = ({ selectedItems }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 930);
  }, []);

  const visibleItems = isSmallScreen ? selectedItems.slice(0, 2) : selectedItems;

  const renderCitiesAndRegions = () => {
    return visibleItems.map((item, index) => (
      <React.Fragment key={item.id}>
        {index > 0 && <div className='vertical-line'></div>}
        <p className='text-cities'>
          {item.ciudad}
          <span>{item.region}</span>
        </p>
      </React.Fragment>
    ));
  };

  const renderFeatures = () => {
    return visibleItems.map((item, index) => (
      <React.Fragment key={item.id}>
        {index > 0 && <div className='vertical-line'></div>}
        <div>
          <p className='text-features'>
            <span>Área:</span>
            {item.area_const}
          </p>
          <p className='text-features'>
            <span>Habitaciones:</span>
            {item.habitaciones}
          </p>
          <p className='text-features'>
            <span>Baños:</span>
            {item.baños}
          </p>
          <p className='text-features'>
            <span>Tipo:</span>
            {item.tipo}
          </p>
          <p className='text-features'>
            <span>Estado:</span>
            {item.estado}
          </p>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <section className='display-comparison'>
      <div className='container-cards-property'>
        {visibleItems.map(item => (
          <ItemFavorite key={item.id} itemProperty={item} />
        ))}
      </div>

      <div className='container-summary-details'>
        <details open>
          <summary>
            <span className="summary-title">
              <img src={"/portal-inmobiliario/img/colraicesInmobiliario/icons/ubication.svg"} alt="Icon" />
              Ubicación
            </span>
            <div className="summary-chevron-up">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </summary>

          <div className="summary-content">
            {renderCitiesAndRegions()}
          </div>

          <div className="summary-chevron-down">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </details>

        <SummaryFavorite icon={"/portal-inmobiliario/img/colraicesInmobiliario/icons/dollar-sign.svg"} title={"Precio Desde"} content={visibleItems} />

        <details>
          <summary>
            <span className="summary-title">
              <img src={"/portal-inmobiliario/img/colraicesInmobiliario/icons/typeProperty.svg"} alt="Icon" />
              Características
            </span>
            <div className="summary-chevron-up">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </summary>

          <div className="summary-content content-features">
            {renderFeatures()}
          </div>

          <div className="summary-chevron-down">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </details>
      </div>
      <div className='container-contacts'>
        {visibleItems?.map((item) =>
          <a className='button-contact' key={item.id}
            href={`https://wa.me/15136479405?text=${encodeURIComponent(`Estoy interesado en el inmueble: *${item.titulo}*. Me gustaría obtener más información sobre el mismo.`)}`}
            target='_blank'
            rel='noopener noreferrer'
          ><BsWhatsapp/> Contactar</a>
        )}

      </div>
    </section>
  );
};


