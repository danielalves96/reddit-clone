import axios from 'axios';

const RedditApi = axios.create({
  baseURL: `https://www.reddit.com/`,
});

export default RedditApi;
