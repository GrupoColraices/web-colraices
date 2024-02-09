'use client'
import '@/sass/components/blog/CardArticleLarge.scss';

const CardArticleLarge = () => {
  return (
    <div className='card-article-large'>
        <div className='image'></div>
        <p className='title'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
        <p className='author'>Lorem ipsum  -  dolor sit </p>
        <span className='author'>Fecha / año</span>
    </div>
  )
}

export default CardArticleLarge