import '@/sass/components/Partners.scss'
import { PartnerImage } from './PartnerImage'

export const Partners = ({ partners, hover = false }) => {
    return (
        <section className="Partners-container space">
            {partners.map((partner) => (
                <PartnerImage key={partner.id} partner={partner} hover={hover} />
            ))}
        </section>
    )
}
