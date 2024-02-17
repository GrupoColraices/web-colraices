import Link from 'next/link'
import React from 'react'

export const InternalLink = ({ children, options }) => {
    const { type, ...attrs } = options

    if (type === 'button') {
        return (
            <button onClick={attrs?.onClick} className={`btn-internal-page ${attrs?.className}`}>
                {children}
            </button>
        )
    }
    if (type === 'anchor')
        return (
            <Link
                href={attrs?.href}
                rel="noopener noreferrer"
                target="_blank"
                className={`btn-internal-page ${attrs?.className}`}
            >
                {children}
            </Link>
        )
    return (
        <Link href={attrs?.href} className={`btn-internal-page ${attrs?.className}`}>
            {children}
        </Link>
    )
}
