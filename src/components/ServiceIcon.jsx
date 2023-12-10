import Image from 'next/image'
import '@/sass/components/ServiceIcon.scss'

export const ServiceIcon = ({ icon }) => {
    return (
        <a href="#" className="Service-icon">
            <figure>
                <Image src={icon.icon} alt={icon.label} />
            </figure>

            <p>{icon.label}</p>
        </a>
    )
}
