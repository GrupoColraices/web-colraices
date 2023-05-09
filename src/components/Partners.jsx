import Image from 'next/image'
import '@/sass/components/Partners.scss'

export const Partners = ({ partners }) => {
    return (
        <section className="Partners-container space">
            {partners.map((partner) => (
                <Image
                    key={partner.id}
                    src={partner.icon}
                    width={111}
                    height={61}
                    alt={partner.name}
                />
            ))}
        </section>
    )
}
