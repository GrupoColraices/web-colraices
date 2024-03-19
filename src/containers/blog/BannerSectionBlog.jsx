import SearchInputBlog from '@/components/blog/SearchInputBlog';
import '@/sass/containers/blog/BannerSectionBlog.scss';

const BannerSectionBlog = ({ articles }) => {
  return (
    <section className='section-blog'>
      <div className="banner-blog">
        <h1>¡Llegaste al blog de la vivienda en Colombia!</h1>
        <span>¿Qué quieres saber?.</span>
      </div>
      <div className='container-search-blog'>
        <SearchInputBlog articles={articles} />
      </div>
    </section>

  )
}

export default BannerSectionBlog