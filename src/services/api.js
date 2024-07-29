import axios from "axios";

export const fetchPhoto = async(query, per_page = 16) => {
    const res = await axios.get(`https://api.unsplash.com/search/photos1`, {
        params: {
            query,
            client_id: 'YpCsjSgQkgOUCRcRgvQNJcoekQytTtYXVsCn8rZCCRM',
            per_page,
        }
    })
    return res.data;
}