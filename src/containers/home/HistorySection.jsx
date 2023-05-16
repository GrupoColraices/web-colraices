import { SliderHistory } from '@/components/SliderHistory'
import React from 'react'

import '@/sass/containers/home/HistorySection.scss'
import Link from 'next/link'
import { TitleLine } from '@/components/TitleLine'

export const HistorySection = () => {
    return (
        <section className="History-container">
            <Link href="/">
                <TitleLine left={true} top={50} />
                <div className="History-button">
                    <h2>
                        Nuestra<span> historia</span>
                    </h2>
                </div>
                <TitleLine top={50} />
            </Link>

            <SliderHistory></SliderHistory>
        </section>
    )
}
