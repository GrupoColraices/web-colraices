'use client'
import '@/sass/components/blog/Pagination.scss'

const Pagination = () => {
  return (
    <div className="pagination-blog">
        <div className='item-pagination-blog-active'>1</div>
        <div className='item-pagination-blog'>2</div>
        <div className='item-pagination-blog'>3</div>
        <div className='item-pagination-blog'>4</div>
        <div className='item-pagination-blog'>5</div>
    </div>
  )
}

export default Pagination