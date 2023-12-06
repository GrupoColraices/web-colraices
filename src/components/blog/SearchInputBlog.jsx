'use client'
import '@/sass/components/blog/SearchInputBlog.scss';

const SearchInputBlog = () => {
  return (
    <div className='input-search-blog'>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <g clipPath="url(#clip0_2998_6547)">
          <path d="M10.1621 2.26096C12.3379 4.43681 12.3379 7.98624 10.1621 10.1621C7.98624 12.3379 4.43681 12.3379 2.26096 10.1621C0.0851105 7.98624 0.0729549 4.43681 2.26096 2.26096C4.44897 0.0851105 7.97409 0.0729549 10.1621 2.26096Z" stroke="#2A3F77" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M10.1621 10.1621L14.5624 14.5624" stroke="#2A3F77" strokeWidth="2" strokeMiterlimit="10"/>
        </g>
        <defs>
          <clipPath id="clip0_2998_6547">
            <rect width="15" height="15" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <input className='' type='text' placeholder='Busca aquí lo que quieres saber' />
    </div>
  )
}

export default SearchInputBlog