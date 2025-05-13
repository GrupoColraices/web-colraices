'use client'
import '../../sass/main.scss'

export default function CleanLayout({ children }) {
  return (
    <div className="clean-layout">
      {children}
    </div>
  )
}