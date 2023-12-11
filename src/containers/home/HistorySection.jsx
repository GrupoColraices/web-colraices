import Link from 'next/link'
import { SliderHistory } from '@/components/SliderHistory'
import '@/sass/containers/home/HistorySection.scss'

export const HistorySection = () => {
    return (
        <section className="History-container">
            <Link href="/">
                <div className="History-button">
                    <h2>
                        Nuestra<span> historia</span>
                    </h2>
                </div>
            </Link>

            <SliderHistory></SliderHistory>
        </section>
    )
}
