'use client'
import React, { useState } from 'react'
import '@/sass/components/PartnerImage.scss'
import Image from 'next/image'

export const PartnerImage = ({ partner, hover }) => {
    const [image, setImage] = useState(partner.icon)

    const imageOnHover = (image) => {
        setImage(image)
    }

    const imageOnHoverOut = (image) => {
        setImage(image)
    }
    return (
        <Image
            className={`PartnerImage ${hover ? 'hover' : ''}`}
            src={image}
            width={111}
            height={61}
            alt={partner.name}
            onMouseOver={() => imageOnHover(partner.hover)}
            onMouseOut={() => imageOnHoverOut(partner.icon)}
        />
    )
}
