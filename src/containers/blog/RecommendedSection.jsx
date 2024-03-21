'use client'
import Line from '@/components/Line';
import TopArticles from '@/components/blog/TopArticles';
import CardVideoLg from '@/components/blog/video/CardVideoLg';
import '@/sass/containers/blog/RecommendedSection.scss';

const RecommendedSection = ({ articles, videos }) => {
  return (
    <section className='recommended-section'>
      <h4 className='title-recommended'>Contenido recomendado</h4>

      <div className='videos'>
        <span>Videos</span>
        <Line width='20' />
      </div>

      <div className='container-video-cards'>
        <div className='video-cards'>
          {videos.map((video, index) => (
            <CardVideoLg key={index} video={video} />
          ))}
        </div>

        <div className='container-top-desktop'>
          <TopArticles articles={articles} />
        </div>
      </div>

    </section>
  )
}

export default RecommendedSection