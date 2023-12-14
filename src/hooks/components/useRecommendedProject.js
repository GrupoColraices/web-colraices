import { APIURL } from '@/helpers/api';
import { useState, useEffect } from 'react'

// Custom hook for project carousel management with automatic 5 second slider (interval)
export const useRecommendedProject = (data) =>{
    const [ projects ] = useState(data);
    const [ index, setIndex ] = useState(0);
    const [ projectsApi, setProjectsApi ] = useState([])

    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch(`${APIURL}/likes`)
          if (response.ok) {
            const result = await response.json();
            setProjectsApi(result?.data)
          } else {
            console.error('Error al obtener datos:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error en la solicitud fetch:', error);
        }
      };
  
      fetchData();
    }, [])
  
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
  
    return { projectsApi: Array.isArray(projectsApi) ? projectsApi : [], projects, index, setIndex }
}