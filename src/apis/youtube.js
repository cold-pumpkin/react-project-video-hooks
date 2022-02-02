import axios from 'axios';

const KEY = 'AIzaSyCn0AgkQ3WLmS4QBuNHusm79tz0YPYtvkc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
  part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})

