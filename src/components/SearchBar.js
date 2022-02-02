import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // onChange 이벤트 리스너에 등록할 이벤트 핸들러
  /*
  const onInputChange = (event) => {
    setTerm(event.target.value);
  }
  */

  // onSubmit 이벤트 리스너에 등록할 이벤트 핸들러
  const onSubmit = (event) => {
    event.preventDefault();
    // YouTube API 호출 & 콜백 정의
    onFormSubmit(term);
  }

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input 
            type="text" 
            value={term} 
            onChange={event => setTerm(event.target.value)}  // inline function
            //onChange={onInputChange}
            />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;