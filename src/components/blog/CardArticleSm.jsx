'use client'
import Link from 'next/link';
import { formatDate } from '@/helpers/formatDate';
import '@/sass/components/blog/CardArticleSmall.scss';
const CardArticleSm = ({ article }) => {
  const shortenedParagraph = article?.descripcion?.length > 50 ? article?.descripcion.substring(0, 70) + "..." : article?.descripcion;
  return (
    <Link href={`/blog/${article?.slug}`}>
      <div className='card-article-small'>
        <img className='image' src={article?.imagen} alt={article?.alt} />
        <div className='texts'>
          <p className='title'>{article?.titulo}</p>
          <p className='description'>{shortenedParagraph}</p>
          <p className='author'>{article?.autor}</p>
          <span className='author'>{formatDate(article?.creacion)}</span>
        </div>
      </div>
    </Link>
  )
}

export default CardArticleSm