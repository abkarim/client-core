import axios from 'axios';

const productionURL = '/api';
const devURL = 'http://localhost/api';

export default axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.NODE_ENV === 'production' ? productionURL : devURL,
  withCredentials: true,
});
