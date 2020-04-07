import queryBuilder from './utils/queryBuilder';
import axios from 'axios';

const API_KEY = '9ac3e9d0e1fcf4c50a0b44b67f46742f';
const BASE_URL = 'https://www.flickr.com/services/rest/';

const baseOptions = {
  format: 'json',
  nojsoncallback: 1,
  api_key: API_KEY,
}

export const getPhotos = (options: {
  [key: string]: any,
  per_page: number,
  page: number
}) => {
  const query = queryBuilder({
    ...baseOptions,
    ...options,
    tags: 'safe',
    safe_search: 1,
    sort: 'interestingness-desc',
    method: 'flickr.photos.search',
  })
  return `${BASE_URL}${query}`
}

export const getInfo = (id: string) => {
  const query = queryBuilder({
    ...baseOptions,
    photo_id: id,
    method: 'flickr.photos.getInfo'
  })
  return `${BASE_URL}${query}`
}