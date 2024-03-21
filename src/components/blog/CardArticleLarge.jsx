'use client'
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/helpers/formatDate';
import '@/sass/components/blog/CardArticleLarge.scss';


const CardArticleLarge = ({ article }) => {
  const shortenedParagraph = article?.descripcion?.length > 150 ? article?.descripcion.substring(0, 150) + "..." : article?.descripcion;
  return (
    <Link href={`/blog/${article?.slug}`}>
      <div className='card-article-large'>
        <Image className='image' width="295" height="160" src={article?.imagen} alt={article?.alt} />
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

export default CardArticleLarge