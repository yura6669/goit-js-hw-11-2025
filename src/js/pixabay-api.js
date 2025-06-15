import axios from "axios";

const apiKey = '38212376-ffcb529addc704f756c0c7d48';
const baseURL = 'https://pixabay.com/api/';
axios.defaults.baseURL = baseURL;

export const getImagesByQuery = async (query) => {
  try {
    const response = await axios.get('', {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};