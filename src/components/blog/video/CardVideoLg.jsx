'use client'
import Image from 'next/image';
import arrowLeft from '../../../../public/icons/arrowLeftBlog.svg';
import arrowRight from '../../../../public/icons/arrowRightBlog.svg';
import '@/sass/components/blog/video/CardVideoLg.scss';

const CardVideoLg = () => {
  return (
    <div className='card-video-lg'>
      <div className='video-control'>
        <Image src={arrowLeft} alt='arrowLeft' className='' width={40} height={40} />
        <div className='image'></div>
        <Image src={arrowRight} alt='arrowRight' className='' width={40} height={40} />
      </div>
      <div className='texts'>
        <p className='title'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p className='author'>Lorem ipsum  -  dolor sit </p>
      </div>
    </div>
  )
}

export default CardVideoLg