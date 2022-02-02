import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('프로미스나인');
  }, []);  // 최초 렌더링 시 동작 (componentDidMount -> useEffect(() => {...}, []) 리팩토링)
 
  // SearchBar에게 props로 이벤트 핸들러 전달
  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q : term,
      }
    });
    
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);  // 검색했을 때 디폴트로 첫번째 비디오 셋팅
  }

  // VideoList -> VideoItem 까지 props 통해서 전달
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList 
              onVideoSelect={onVideoSelect}
              videos={videos} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
