'use client'
import React, { useContext, useEffect, useState } from 'react';
import Line from '@/components/Line';
import CardArticleLarge from '@/components/blog/CardArticleLarge';
import CardArticleMedium from '@/components/blog/CardArticleMedium';
import CardArticleSm from '@/components/blog/CardArticleSm';
import '@/sass/containers/blog/ArticlesSection.scss';
import '@/sass/components/blog/Pagination.scss'
import ResponsivePagination from 'react-responsive-pagination'
import { ArticlesContext } from '@/context/ArticlesContext';


const ArticlesSection = () => {
  const { filtered: articles } = useContext(ArticlesContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = articles?.length / 6 > 1 ? Math.ceil(articles.length / 6) : 1;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  const startIndex = (currentPage - 1) * 6;
  const endIndex = Math.min(startIndex + 6, articles?.length || 0);
  const sliceArticles = articles ? articles?.slice(startIndex, endIndex) : [];

  useEffect(() => {
    setCurrentPage(1);
  }, [articles])

  return (
    <section>
      <h2>Artículos</h2>
      <Line width='20' />
      {articles.length !== 0 ?
        <>
          <div className='container-cards-article'>
            <div>
              {(sliceArticles[0]) && <CardArticleLarge article={sliceArticles[0]} />}
            </div>
            <div className='container-cards-medium'>
              {(sliceArticles[1]) && <CardArticleMedium article={sliceArticles[1]} />}
              {(sliceArticles[2]) && <CardArticleMedium article={sliceArticles[2]} />}
            </div>
            <div className='container-cards-sm-desktop'>
              {(sliceArticles[3]) && <CardArticleSm article={sliceArticles[3]} />}
              {(sliceArticles[4]) && <CardArticleSm article={sliceArticles[4]} />}
              {(sliceArticles[5]) && <CardArticleSm article={sliceArticles[5]} />}
            </div>
          </div>
          <div className="container-pagination">
            <ResponsivePagination
              total={totalPages}
              current={currentPage}
              onPageChange={page => handlePageChange(page)}
            />
          </div>  </> : <p>No hay artículos que coincidan con tu búsqueda</p>}
    </section >

  )
}

export default ArticlesSection