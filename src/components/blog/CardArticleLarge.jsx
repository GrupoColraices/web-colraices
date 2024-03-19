'use client'
import '@/sass/components/blog/CardArticleLarge.scss';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';


const CardArticleLarge = ({ article }) => {
  return (
    <Link href={`/blog/${article?.slug}`}>
      <div className='card-article-large'>
        <Image className='image' width="295" height="160" src={article?.imagen} alt={article?.alt} />
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

export default CardArticleLarge