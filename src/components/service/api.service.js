import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPID_API_KEY = process.env.REACT_APP_API_KEY || "22c404671cmsh9465eea20c313b5p14ac08jsnc0d2c37bc1c8"
const options = {
  params: {
   
        part: "id,snippet",
        type: "video",
        maxResults: 70,
  },
  headers: {
		'x-rapidapi-key': RAPID_API_KEY,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data
  },
};
