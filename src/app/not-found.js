import Link from "next/link"
export default function NotFound() {
  return (
    <div className="container-not-found">
      <img src='/not-found-404.webp' />
      <Link  href={'/'}>Volver al Inicio</Link>
    </div>
  )
}
