'use client'
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/helpers/formatDate';
import '@/sass/components/blog/CardArticleMedium.scss';

const CardArticleMedium = ({ article }) => {
  const shortenedParagraph = article?.descripcion?.length > 50 ? article?.descripcion.substring(0, 50) + "..." : article?.descripcion;
  return (
    <Link href={`/blog/${article?.slug}`}>
      <div className='card-article-medium'>
        <Image width={300} height={200} className="image" src={article?.imagen} alt={article?.alt} />
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

export default CardArticleMedium