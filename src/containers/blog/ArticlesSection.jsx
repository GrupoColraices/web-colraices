'use client'
import React, { Suspense, useState } from 'react';
import useSWR from 'swr';
import Line from '@/components/Line';
import CardArticleLarge from '@/components/blog/CardArticleLarge';
import CardArticleMedium from '@/components/blog/CardArticleMedium';
import CardArticleSm from '@/components/blog/CardArticleSm';
import '@/sass/containers/blog/ArticlesSection.scss';
import '@/sass/components/blog/Pagination.scss'
import ResponsivePagination from 'react-responsive-pagination'
import { Loading } from '@/app/casas-apartamentos-colombia-desde-el-exterior/components/Loading';


const ArticlesSection = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articleStart, setArticleStart] = useState(0)
  const [articleEnd, setArticleEnd] = useState(6)

  const totalPages = articles.length / 6
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
  console.log(sliceArticles(articleStart, articleEnd), "slice")
  return (
    <section>
      <h2>Artículos</h2>
      <Line width='20' />

      <Suspense fallback={<p>Loading</p>}>


        <div className='container-cards-article'>
          {/* {articles?.slice(articleStart, articleEnd).map((article, index) =>
            <CardArticleLarge key={index} article={article} />
          )} */}
          <div>
            <CardArticleLarge article={sliceArticles(articleStart, articleEnd)[0]} />
          </div>
          <div className='container-cards-medium'>
            <CardArticleMedium article={sliceArticles(articleStart, articleEnd)[1]} />
            <CardArticleMedium article={sliceArticles(articleStart, articleEnd)[2]} />
          </div>

          <div className='container-cards-sm-desktop'>
            <CardArticleSm article={sliceArticles(articleStart, articleEnd)[2]} />
            <CardArticleSm article={sliceArticles(articleStart, articleEnd)[4]} />
            <CardArticleSm article={sliceArticles(articleStart, articleEnd)[5]} />
          </div>
        </div>
        <div className="container-pagination">
          <ResponsivePagination
            total={totalPages}
            current={currentPage}
            onPageChange={page => handlePageChange(page)}
          />
        </div>
      </Suspense>
    </section>

  )
}

export default ArticlesSection