// Custom Hook
import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);  // 최초 렌더링 시 동작 (componentDidMount -> useEffect(() => {...}, []) 리팩토링)

  // SearchBar에게 props로 이벤트 핸들러 전달
  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q : term,
      }
    });
    
    setVideos(response.data.items); 
  }

  return [videos, search];
};

export default useVideos;