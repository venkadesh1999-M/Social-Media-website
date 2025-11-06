import axios from 'axios';
const base = process.env.REACT_APP_API_BASE || 'https://social-media-website-vt6g.onrender.com';
export default axios.create({ baseURL: base });
