import axios from 'axios';

/**
 * Api Template. Predefined Axios template
 */

const list = (url, params) => {
  return axios.get(url, { params });
};
const detail = (url, id) => {
  return axios.get(`${url}/${id}`);
};

const apiTemplate = {
  list, detail
};

export { apiTemplate as default };
