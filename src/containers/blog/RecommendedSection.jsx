'use client'
import Line from '@/components/Line';
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

        <div className='video-cards'>
          <CardVideoLg/>
          <CardVideoLg/>
        </div>

    </section>
  )
}

export default RecommendedSection