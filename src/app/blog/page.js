import { Partners } from "@/components/Partners";
import BannerSectionBlog from "@/containers/home/blog/BannerSectionBlog";
import { partners } from "@/helpers";

export default function BlogPage() {
    return(
        <main>
            <BannerSectionBlog/>
            <div className='partners'>
                <Partners partners={partners} hover={true} />
            </div>
        </main>
    )
}
