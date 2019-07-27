import axios from 'axios';
import API from './api';

const getSystemInfo = async () => {
    try {
        const result = await axios.get(`${API.BASE}system/get_system_info`);
        return result.data;
    } catch (e) {}
};

export default {
    getSystemInfo
};
