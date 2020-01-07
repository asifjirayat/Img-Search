import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID 6dd00d40d5e7243c462b020607b59f26e2856a963d4ebd99ad0e230f196b274a'
  }
});