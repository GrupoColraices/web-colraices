'use client'
import Line from '@/components/Line';
import Top from '@/components/blog/Top';
import CardVideoLg from '@/components/blog/video/CardVideoLg';
import '@/sass/containers/blog/RecommendedSection.scss';

const RecommendedSection = () => {
  return (
    <section className='recommended-section'>
        <h4 className='title-recommended'>Contenido recomendado</h4>

        <div className='videos'>
          <span>Videos</span>
          <Line width='20' />
        </div>

        <div className='container-video-cards'>
          <div className='video-cards'>
            <CardVideoLg/>
            <CardVideoLg/>
            <CardVideoLg/>
            <CardVideoLg/>
          </div>

          <div className='container-top-desktop'>
            <Top/>
          </div>
        </div>

    </section>
  )
}

export default RecommendedSection