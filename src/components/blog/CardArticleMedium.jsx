'use client'
import '@/sass/components/blog/CardArticleMedium.scss';
import Image from 'next/image';
import { format } from 'date-fns';
import Link from 'next/link';

const CardArticleMedium = ({ article }) => {
  return (
    <Link href={`/blog/${article?.slug}`}>
      <div className='card-article-medium'>
        <Image width={300} height={200} className="image" src={article?.imagen} alt={article?.alt} />
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

export default CardArticleMedium