'use client'
import '../../sass/main.scss'

export default function CleanLayout({ children }) {
  return (
    <section className="clean-layout">
      <main>
        {children}
      </main>
    </section>
  )
}