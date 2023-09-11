// import React from 'react';
// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '38424207-c86d4b463b0395cac7359a6bf';

// export const fetchImages = (query, page, setStateCallback) => {
//   const URL = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//   setStateCallback({ isLoading: true });

//   axios
//     .get(URL)
//     .then(response => {
//       setStateCallback(prevState => ({
//         images: [...prevState.images, ...response.data.hits],
//       }));
//     })
//     .catch(error => console.error('Error fetching data:', error))
//     .finally(() => setStateCallback({ isLoading: false }));
// };

// export default fetchImages;


import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchImages = async (value, page) => {
    const resp = await axios.get(`?key=38424207-c86d4b463b0395cac7359a6bf&q=${value}&page=${page}`);
    return resp.data
}
