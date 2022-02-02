import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('프로미스나인');
  
  useEffect(() => {
    setSelectedVideo(videos[0]);  // 검색했을 때 디폴트로 첫번째 비디오 셋팅
  }, [videos]);

  
  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList 
              onVideoSelect={(video) => setSelectedVideo(video)}
              videos={videos} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
