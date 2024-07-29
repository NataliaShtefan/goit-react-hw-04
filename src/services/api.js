import axios from "axios";

export const fetchPhoto = async (query, page, per_page = 8) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query,
            client_id: 'YpCsjSgQkgOUCRcRgvQNJcoekQytTtYXVsCn8rZCCRM',
            per_page,
            page,
        }
    })
    return res.data;
}