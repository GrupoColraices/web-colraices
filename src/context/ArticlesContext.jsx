'use client'
import { createContext } from 'react'
import useArticles from '@/hooks/useArticles'


const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
    const [filtered, updateFiltered] = useArticles();

    return (
        <ArticlesContext.Provider
            value={{
                filtered,
                updateFiltered
            }}>
            {children}
        </ArticlesContext.Provider>
    )
}
export { ArticlesContext, ArticlesProvider }
