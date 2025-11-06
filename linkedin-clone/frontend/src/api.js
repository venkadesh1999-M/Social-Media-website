import axios from 'axios';
const base = process.env.REACT_APP_API_BASE || 'https://social-media-website-vr6g.onrender.com/api';
export default axios.create({ baseURL: base });
