import apiTemplate from './apiTemplate';
/**
 * Giphy APIs. List of giphy APIs, for later use if there are will be more GIPHY's API.
 */

const url = 'https://api.giphy.com/v1/gifs';
const giphyApi = {
  list: (reqParams) => {
    const { q, offset } = reqParams;
    const suffixUrl = q ? 'search' : 'trending';
    return apiTemplate.list(`${url}/${suffixUrl}`, {
      offset,
      q,
      api_key: 'FyIGrVHWHbZIJHSwBsiGZat60OwKsqGs',
      limit: 20,
    })
  },
  detail: (id) => apiTemplate.detail(url, id),
};

export { giphyApi as default };
