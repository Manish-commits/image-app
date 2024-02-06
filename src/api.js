import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID t_pHxDoNhYmZ1OB0PMKY7UmU7eaDJ2QQfbwTyU6m6NQ'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;