import { TitleLine } from '@/components/TitleLine'
import '@/sass/containers/home/PropertySection.scss'

export const PropertySection = async () => {
    return (
        <section className="Property-container">
            <div className='title-container'>
                <div className='container-timeline'>

                    <div className='timeline-desktop'>
                        <TitleLine left={true} top={50} width={129} />
                    </div>

                    <h2>
                        <div className='timeline'>
                            <TitleLine left={true} top={50} width={7.5} />
                        </div>
                        No estás solo
                        <div className='timeline'>
                            <TitleLine right={true} top={50} width={7.5} />
                        </div>
                    </h2>

                    <div className='timeline-desktop'>
                        <TitleLine right={true} top={50} width={129} />
                    </div>

                </div>

                <p>Te acompañamos en todo el proceso, desde la búsqueda hasta que recibas tu casa en Colombia.</p>
            </div>
        </section>
    )
}
