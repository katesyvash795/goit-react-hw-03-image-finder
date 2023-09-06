// api.js
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38424207-c86d4b463b0395cac7359a6bf';

const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw error;
  }
};

export { fetchImages };
