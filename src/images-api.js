import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (topic, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            client_id: 'nzt-Guf-cg46mguod6BPkd0Hv_Ls9G-fRPpiMubm79A',
            query: topic,
            page: currentPage,
            per_page: 12,
        },
    });
    return response.data;

}