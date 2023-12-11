import { useState, useEffect } from 'react'

// Custom hook for project carousel management with automatic 5 second slider (interval)
export const useRecommendedProject = (data) =>{
    const [ projects ] = useState(data);
    const [ index, setIndex ] = useState(0);
  
    useEffect(() => {
      const lastIndex = projects.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }

      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 5000);

      return () => {
        clearInterval(slider);
      };
    }, [index, projects]);
  
    return { projects, index, setIndex }
}