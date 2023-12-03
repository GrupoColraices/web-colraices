import { Partners } from "@/components/Partners";
import ArticlesSection from "@/containers/home/blog/ArticlesSection";
import BannerSectionBlog from "@/containers/home/blog/BannerSectionBlog";
import { partners } from "@/helpers";
import '@/sass/containers/blog/Blog.scss';

export default function BlogPage() {
    return(
        <main>
            <BannerSectionBlog/>
            <div className='partners'>
                <Partners partners={partners} hover={true} />
            </div>
            <div className="article-container">
                <ArticlesSection/>
            </div>
        </main>
    )
}
