import React from 'react';

class SearchBar extends React.Component {

  state = { term : '' }  // 입력한 검색어

  // onclick 이벤트 리스너에 등록할 이벤트 핸들러
  onInputChange = event => {
    this.setState({ term : event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();
    
    // YouTube API 호출 & 콜백 정의
    this.props.onFormSubmit(this.state.term);

  }


  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              //onChange={e => this.setState({ term : e.target.value })}  // inline function
              onChange={this.onInputChange}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;