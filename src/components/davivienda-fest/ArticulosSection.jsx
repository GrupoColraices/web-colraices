'use client'
import React, { useState } from 'react'
import CardArticleLarge from '@/components/blog/CardArticleLarge'
import CardArticleMedium from '@/components/blog/CardArticleMedium'
import CardArticleSm from '@/components/blog/CardArticleSm'
import Line from '@/components/Line'
import ResponsivePagination from 'react-responsive-pagination'
import styles from '../../app/davivienda-fest/davivienda-fest.module.css'
import './ArticulosSection.css' // Override de alineación
// Importar estilos del blog originales
import '@/sass/containers/blog/ArticlesSection.scss'
import '@/sass/containers/blog/Blog.scss'
import '@/sass/components/blog/Pagination.scss'

export default function ArticulosSection({ articles }) {
    const [currentPage, setCurrentPage] = useState(1)

    if (!articles || articles.length === 0) {
        return null
    }

    // Paginación
    const totalPages = articles?.length / 6 > 1 ? Math.ceil(articles.length / 6) : 1
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    const startIndex = (currentPage - 1) * 6
    const endIndex = Math.min(startIndex + 6, articles?.length || 0)
    const sliceArticles = articles ? articles.slice(startIndex, endIndex) : []

    return (
        <>
            {/* Títulos personalizados de Davivienda */}
            <div className={styles.contentWrapper}>
                <div className={styles.titleSection}>
                    <h1 className={styles.mainTitle}>Ideas que construyen patrimonio</h1>
                </div>
                <p className={styles.descriptionContent}>Consejos, historias y tendencias para invertir en Colombia</p>
            </div>

            {/* Sección de artículos con estilos originales del blog */}
            <div className="articles davivienda-articles">
                <div className="article-container">
                    <section>
                        <h2>Artículos</h2>
                        <Line width="20" />

                        {articles.length !== 0 ? (
                            <>
                                <div className="container-cards-article">
                                    <div>{sliceArticles[0] && <CardArticleLarge article={sliceArticles[0]} />}</div>
                                    <div className="container-cards-medium">
                                        {sliceArticles[1] && <CardArticleMedium article={sliceArticles[1]} />}
                                        {sliceArticles[2] && <CardArticleMedium article={sliceArticles[2]} />}
                                    </div>
                                    <div className="container-cards-sm-desktop">
                                        {sliceArticles[3] && <CardArticleSm article={sliceArticles[3]} />}
                                        {sliceArticles[4] && <CardArticleSm article={sliceArticles[4]} />}
                                        {sliceArticles[5] && <CardArticleSm article={sliceArticles[5]} />}
                                    </div>
                                </div>

                                {/* Paginación habilitada */}
                                {totalPages > 1 && (
                                    <div className="container-pagination">
                                        <ResponsivePagination
                                            total={totalPages}
                                            current={currentPage}
                                            onPageChange={(page) => handlePageChange(page)}
                                        />
                                    </div>
                                )}
                            </>
                        ) : (
                            <p>No hay artículos que coincidan con tu búsqueda</p>
                        )}
                    </section>
                </div>
            </div>
        </>
    )
}
