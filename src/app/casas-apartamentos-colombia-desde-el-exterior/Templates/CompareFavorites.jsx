// 'use client'
// import { useState } from 'react';
// import React, { use, useEffect } from 'react'
// import ItemFavorite from '../molecules/ItemFavorite'
// import { SummaryFavorite } from '../components/SummaryFavorite';
// import { useCurrency } from '../hooks/useCurrency';

// export const CompareFavorites = ({ selectedItems }) => {
//   const [isSmallScreen, setisSmallScreen] = useState(false);
//   useEffect(() => {
//     if (window.innerWidth < 930) {
//       setisSmallScreen(true)
//     }
//   }, [])
//   const [formatePrice] = useCurrency();
//   const visibleItems = isSmallScreen ? selectedItems.slice(0, 2) : selectedItems;

//   const cities = visibleItems.map(item => item.ciudad)
//   const regions = visibleItems.map(item => item.region)
//   const price = visibleItems.map(item => formatePrice(item.precio))
//   const area = visibleItems.map(item => item.area_const)
//   const rooms = visibleItems.map(item => item.habitaciones)
//   const bathrooms = visibleItems.map(item => item['baños'])
//   const type = visibleItems.map(item => item.tipo)
//   const status = visibleItems.map(item => item.estado)
//   return (
//     <section className='display-comparison'>
//       <div className='container-cards-property'>
//         {visibleItems?.map(item => (
//           <ItemFavorite key={item.id} itemProperty={item} />
//         ))}
//       </div>
//       <div className='container-summary-details'>
//         <details open>
//           <summary>
//             <span className="summary-title"><img src={"/portal-inmobiliario/img/colraicesInmobiliario/icons/ubication.svg"} alt="Icon" />Ubicación</span>
//             <div className="summary-chevron-up">
//               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
//             </div>
//           </summary>

//           <div className="summary-content">
//             {isSmallScreen ?
//               <>

//                 <p className='text-cities'>
//                   {cities[0]}
//                   <span>{regions[0]}</span>
//                 </p>
//                 <div className='vertical-line'></div>
//                 <p className='text-cities'>
//                   {cities[1]}
//                   <span>{regions[1]}</span>
//                 </p>
//               </>
//               :
//               <>
//                 <p className='text-cities'>
//                   {cities[0]}
//                   <span>{regions[0]}</span>
//                 </p>
//                 <div className='vertical-line'></div>
//                 <p className='text-cities'>
//                   {cities[1]}
//                   <span>{regions[1]}</span>
//                 </p>
//                 <div className='vertical-line'></div>
//                 <p className='text-cities'>
//                   {cities[2]}
//                   <span>{regions[2]}</span>
//                 </p>
//               </>
//             }
//           </div>
//           <div className="summary-chevron-down">
//             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
//           </div>
//         </details>
//         <SummaryFavorite icon={"/portal-inmobiliario/img/colraicesInmobiliario/icons/dollar-sign.svg"} title={"Precio Desde"} content={price} />
//         <details>
//           <summary>
//             <span className="summary-title"><img src={"/portal-inmobiliario/img/colraicesInmobiliario/icons/ubication.svg"} alt="Icon" />Características</span>
//             <div className="summary-chevron-up">
//               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
//             </div>
//           </summary>

//           <div className="summary-content content-features">
//             {isSmallScreen ?
//               <>
//                 <div>

//                   <p className='text-features'>
//                     <span>Área:</span>
//                     {area[0]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Habitaciones:</span>
//                     {rooms[0]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Baños:</span>
//                     {bathrooms[0]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Tipo:</span>
//                     {type[0]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Estado</span>
//                     {status[0]}
//                   </p>
//                 </div>
//                 <div>
//                   <div className='vertical-line'></div>
//                   <p className='text-features'>
//                     <span>Área:</span>
//                     {area[1]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Habitaciones:</span>
//                     {rooms[1]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Baños:</span>
//                     {bathrooms[1]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Tipo:</span>
//                     {type[1]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Estado</span>
//                     {status[1]}
//                   </p>
//                 </div>
//               </>
//               :
//               <>
//                 <div>
//                   <p className='text-features'>
//                     <span>Área:</span>
//                     {area[0]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Habitaciones:</span>
//                     {rooms[0]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Baños:</span>
//                     {bathrooms[0]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Tipo:</span>
//                     {type[0]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Estado</span>
//                     {status[0]}
//                   </p>
//                 </div>
//                 <div className='vertical-line'></div>
//                 <div>
//                   <p className='text-features'>
//                     <span>Área:</span>
//                     {area[1]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Habitaciones:</span>
//                     {rooms[1]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Baños:</span>
//                     {bathrooms[1]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Tipo:</span>
//                     {type[1]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Estado</span>
//                     {status[1]}
//                   </p>
//                 </div>

//                 <div className='vertical-line'></div>
//                 <div>
//                   <p className='text-features'>
//                     <span>Área:</span>
//                     {area[2]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Habitaciones:</span>
//                     {rooms[2]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Baños:</span>
//                     {bathrooms[2]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Tipo:</span>
//                     {type[2]}
//                   </p>
//                   <p className='text-features'>
//                     <span>Estado</span>
//                     {status[2]}
//                   </p>
//                 </div>
//               </>
//             }
//           </div>
//           <div className="summary-chevron-down">
//             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
//           </div>
//         </details>
//       </div>
//     </section>

//   )
// }
import React, { useState, useEffect } from 'react';
import ItemFavorite from '../molecules/ItemFavorite';
import { SummaryFavorite } from '../components/SummaryFavorite';
import { useCurrency } from '../hooks/useCurrency';

export const CompareFavorites = ({ selectedItems }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [formatePrice] = useCurrency();

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

        <SummaryFavorite icon={"/portal-inmobiliario/img/colraicesInmobiliario/icons/dollar-sign.svg"} title={"Precio Desde"} content={visibleItems.map(item => formatePrice(item.precio))} />

        <details>
          <summary>
            <span className="summary-title">
              <img src={"/portal-inmobiliario/img/colraicesInmobiliario/icons/ubication.svg"} alt="Icon" />
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
    </section>
  );
};


