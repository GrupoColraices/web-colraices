import { TitleLine } from '@/components/TitleLine'
import '@/sass/containers/home/PropertySection.scss'

export const PropertySection = async () => {
    return (
        <section className="Property-container">
            <div className='title-container'>
                <h2>
                    <TitleLine left={true} top={50} width={7.5} />
                    No estás solo.
                    <TitleLine right={true} top={50} width={7.5} />
                </h2>
                <p>Te acompañamos en todo el proceso, desde la búsqueda hasta que recibas tu casa en Colombia.</p>
            </div>
        </section>
    )
}
