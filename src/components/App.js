import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // 컴포넌트 마운팅 직후 디폴트로 검색
  componentDidMount() {
    this.onTermSubmit('프로미스나인');
  }

  // SearchBar에게 props로 이벤트 핸들러 전달
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q : term,
      }
    });
    
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]  // 검색했을 때 디폴트로 첫번째 비디오 셋팅
    });
  }

  // VideoList -> VideoItem 까지 props 통해서 전달
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList 
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
