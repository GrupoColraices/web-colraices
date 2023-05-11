import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavLink = ({ label, href, onClick }) => {
    const activeRoute = usePathname()

    return (
        <Link
            className={`NavLink ${activeRoute === href ? 'active' : ''}`}
            href={href}
            onClick={onClick}
        >
            {label}
        </Link>
    )
}
