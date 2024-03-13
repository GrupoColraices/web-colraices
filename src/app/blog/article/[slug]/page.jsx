import { Header } from '@/components/Header'
import SearchInputBlog from '@/components/blog/SearchInputBlog';
import Top from '@/components/blog/Top';
import '@/sass/containers/blog/ArticlePage.scss';

export default function ArticlePage(props) {
    return (
        <>
            <Header />
            <section className='article-container'>
                <SearchInputBlog />
                <div className='article-content'>
                    <article>
                        <h1>Lorem</h1>
                        <span>Lorem span</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        <div className="image" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
                        </p>
                    </article>
                    <aside>
                        <Top />
                    </aside>

                </div>
            </section>
        </>

    )
}
