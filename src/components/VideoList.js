import React from 'react';
import VideoItem from './VideoItem';

// (props) 대신 destructuring 이용해서 ({videos}) 로 표현 가능
const VideoList = ({ videos, onVideoSelect }) => {
  // App 에서 props 통해서 렌더링할 비디오 리스트 전달받음
  // 각 video에 대해 VideoItem 컴포넌트와 연동하여 렌더링
  const renderedList = videos.map(video => {
    return ( 
      <VideoItem 
        key={video.id.videoId}
        onVideoSelect={onVideoSelect} 
        video={video}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>
};

export default VideoList;