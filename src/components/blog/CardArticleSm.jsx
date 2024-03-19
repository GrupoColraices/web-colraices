'use client'
import '@/sass/components/blog/CardArticleSmall.scss';
import { format } from 'date-fns';
import Link from 'next/link';
const CardArticleSm = ({ article }) => {
  return (
    <Link href={`/blog/${article?.slug}`}>
      <div className='card-article-small'>
        <img className='image' src={article?.imagen} alt={article?.alt} />
        <div className='texts'>
          <p className='title'>{article?.titulo}</p>
          <p className='description'>{article?.descripcion}</p>
          <p className='author'>{article?.autor}</p>
          <span className='author'>{format(new Date(article?.creacion), 'dd MMMM / yyyy')}</span>
        </div>
      </div>
    </Link>
  )
}

export default CardArticleSm