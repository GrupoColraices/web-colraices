"use client"
import Link from 'next/link'
import "@/sass/components/leasing-bancolombia/LeasingButton.scss"

export const Button = ({ text, URL }) => {
    return (
        <Link className="btn-link" href={URL}>{text}</Link>
    )
}
