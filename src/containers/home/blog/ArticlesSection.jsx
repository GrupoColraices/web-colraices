'use client'
import Line from '@/components/Line';
import CardArticleLarge from '@/components/blog/CardArticleLarge';
import CardArticleMedium from '@/components/blog/CardArticleMedium';
import '@/sass/containers/blog/ArticlesSection.scss';

const ArticlesSection = () => {
  return (
    <section>
        <h2>Artículos</h2>
        <Line width='20' />

        <div className='container-cards-article'>
            <div>
                <CardArticleLarge/>
            </div>
            <div className='container-cards-medium'>
                <CardArticleMedium />
                <CardArticleMedium />
            </div>
        </div>
    </section>
  )
}

export default ArticlesSection