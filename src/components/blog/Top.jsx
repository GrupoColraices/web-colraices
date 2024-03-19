'use client'
import '@/sass/components/blog/Top.scss';
import Link from 'next/link';


const Top = ({ articles }) => {

    return (
        <div className="top">
            <h5>Top Articulos Blog</h5>

            <div className='top-article-container'>
                {articles?.slice(0, 5).map((article, index) => (
                    <Link href={`/blog/${article?.slug}`} key={index}>
                        <div className='top-article' >
                            <span className='number'>{index + 1}</span>

                            <div className='line-gold-container'>
                                <div className='line-gold'></div>
                            </div>

                            <div className='top-texts'>
                                <p className='title'>{article.titulo}</p>
                                <p className='description'>{article.descripcion}</p>
                                <p className='author'>{article.autor} </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default Top