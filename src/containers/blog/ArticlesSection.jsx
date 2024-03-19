'use client'
import React, { useContext, useState } from 'react';
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
  const [articleStart, setArticleStart] = useState(0)
  const [articleEnd, setArticleEnd] = useState(6)

  const totalPages = articles?.length / 6 > 1 ? articles?.length / 6 : 1
  const handlePageChange = (page) => {
    if (page > currentPage) {
      setArticleStart(articleStart + (page - currentPage) * 6)
      setArticleEnd(articleEnd + (page - currentPage) * 6)
    } else {
      setArticleStart(articleStart - (currentPage - page) * 6)
      setArticleEnd(articleEnd - (currentPage - page) * 6)
    }
    setCurrentPage(page);
  }

  const sliceArticles = (start, end) => {
    return articles?.slice(start, end)
  }
  return (
    <section>
      <h2>Artículos</h2>
      <Line width='20' />
      {articles.length !== 0 ?
        <>
          <div className='container-cards-article'>
            <div>
              {(sliceArticles(articleStart, articleEnd)[0]) && <CardArticleLarge article={sliceArticles(articleStart, articleEnd)[0]} />}
            </div>
            {<div className='container-cards-medium'>
              {(sliceArticles(articleStart, articleEnd)[1]) && <CardArticleMedium article={sliceArticles(articleStart, articleEnd)[1]} />}
              {(sliceArticles(articleStart, articleEnd)[2]) && <CardArticleMedium article={sliceArticles(articleStart, articleEnd)[2]} />}
            </div>}
            <div className='container-cards-sm'>
              {(sliceArticles(articleStart, articleEnd)[3]) && <CardArticleSm article={sliceArticles(articleStart, articleEnd)[3]} />}
            </div>
            <div className='container-cards-sm-desktop'>
              {(sliceArticles(articleStart, articleEnd)[3]) && <CardArticleSm article={sliceArticles(articleStart, articleEnd)[3]} />}
              {(sliceArticles(articleStart, articleEnd)[4]) && <CardArticleSm article={sliceArticles(articleStart, articleEnd)[4]} />}
              {(sliceArticles(articleStart, articleEnd)[5]) && <CardArticleSm article={sliceArticles(articleStart, articleEnd)[5]} />}
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