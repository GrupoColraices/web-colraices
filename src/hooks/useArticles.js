'use client'
import { useState } from 'react'
const useArticles = () => {
    const [filtered, setFiltered] = useState([]);
    const updateFiltered = (values) => {
        setFiltered(values);
    }
    return [filtered, updateFiltered]
}
export default useArticles;