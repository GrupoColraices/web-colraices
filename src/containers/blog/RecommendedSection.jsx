'use client'
import { useState } from 'react';
import SearchInputBlog from '@/components/blog/SearchInputBlog';
import TopArticles from '@/components/blog/TopArticles';
import CardVideoLg from '@/components/blog/video/CardVideoLg';
import Line from '@/components/Line';
import '@/sass/containers/blog/RecommendedSection.scss';

const RecommendedSection = ({ articles, videos }) => {
  const [label, setLabel] = useState('');
  const filtered = videos.length > 0 ? videos?.filter((item) => {
    const search = label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const name = item?.snippet?.title?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const result = (search && name?.startsWith(search)) || name === search || name?.includes(search);
    return result;
  }) : videos;
  return (
    <section className='recommended-section'>

      <h4 className='title-recommended'>Contenido recomendado</h4>

      <div className='input-search-blog'>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <g clipPath="url(#clip0_2998_6547)">
            <path d="M10.1621 2.26096C12.3379 4.43681 12.3379 7.98624 10.1621 10.1621C7.98624 12.3379 4.43681 12.3379 2.26096 10.1621C0.0851105 7.98624 0.0729549 4.43681 2.26096 2.26096C4.44897 0.0851105 7.97409 0.0729549 10.1621 2.26096Z" stroke="#2A3F77" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M10.1621 10.1621L14.5624 14.5624" stroke="#2A3F77" strokeWidth="2" strokeMiterlimit="10" />
          </g>
          <defs>
            <clipPath id="clip0_2998_6547">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input
          className=''
          name='search'
          type='text'
          value={label}
          placeholder='Busca aquí los videos que quieras ver' autoComplete='off'
          onInput={(e) => {
            setLabel(e.target.value)
          }} />
      </div>
      <div className='videos'>
        <span>Videos</span>
        <Line width='20' />
      </div>

      <div className='container-video-cards'>
        {filtered.length > 0 ? (
          <div className='video-cards'>
            {filtered.map((video, index) => (
              <CardVideoLg key={index} video={video} />
            ))}
          </div>
        ) : (
          <p>No hay videos que coincidan con tu búsqueda</p>
        )}


        <div className='container-top-desktop'>
          <TopArticles articles={articles} />
        </div>
      </div>

    </section>
  )
}

export default RecommendedSection