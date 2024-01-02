import React from 'react'

export const SummaryFavorite = ({ icon, title, content }) => {
    return (
        <details open>
            <summary>
                <span class="summary-title"><img src={icon} alt="Icon" />{title}</span>
                <div class="summary-chevron-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </summary>

            <div class="summary-content">
                <p>
                    {content[0]}
                </p>
                <div className='vertical-line'></div>
                <p>
                    {content[1]}
                </p>
                <div className='vertical-line'></div>
                <p>
                    {content[2]}
                </p>
            </div>
            <div class="summary-chevron-down">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </div>
        </details>
    )
}
