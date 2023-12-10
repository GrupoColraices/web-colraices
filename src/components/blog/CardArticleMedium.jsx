'use client'
import '@/sass/components/blog/CardArticleMedium.scss';

const CardArticleMedium = () => {
  return (
    <div className='card-article-medium'>
        <div className='image'></div>
        <div className='texts'>
            <p className='title'>Lorem ipsum dolor sit</p>
            <p className='description'>Lorem ipsum dolor sit amet, cons</p>
            <p className='author'>Lorem ipsum  -  dolor sit </p>
            <span className='author'>Fecha / año</span>
        </div>
    </div>
  )
}

export default CardArticleMedium