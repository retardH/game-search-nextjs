import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e2db06548b2144b8ac799c3e6b5a0412',
    }
})