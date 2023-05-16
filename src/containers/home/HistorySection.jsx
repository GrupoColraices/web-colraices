import { SliderHistory } from '@/components/SliderHistory'
import React from 'react'

import '@/sass/containers/home/HistorySection.scss'
import Link from 'next/link'

export const HistorySection = () => {
    return <section className='History-container'>
        <Link href='/'>
            <div className='History-button'>
                <h2>Nuestra<span> historia</span></h2>
            </div>
        </Link>

        <SliderHistory></SliderHistory>
    </section>
}
