import React from 'react'
import { useCurrency } from '../hooks/useCurrency';

export const SummaryFavorite = ({ icon, title, content }) => {
  const [formatePrice] = useCurrency();

    return (
        <details open>
            <summary>
                <span class="summary-title"><img src={icon} alt="Icon" />{title}</span>
                <div class="summary-chevron-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </summary>

            <div class="summary-content">
                {content?.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {index > 0 && <div className='vertical-line'></div>}
                        <p className='text-cities'>
                            {formatePrice(item.precio)}
                        </p>
                    </React.Fragment>
                ))}
            </div>
            <div class="summary-chevron-down">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </div>
        </details>
    )
}
