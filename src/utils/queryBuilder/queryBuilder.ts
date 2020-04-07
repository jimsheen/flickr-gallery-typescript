import { isNil } from 'lodash';

export default (queryParams: {
  [key: string]: any }) => {
  let query = '';
  Object.entries(queryParams).forEach(([k, v], index) => {
    if (!isNil(v)) {
      const symbol = index === 0 ? '?' : '&';
      query += `${symbol}${buildQueryParam(k, v)}`;
    }
  })

  return query;
};

const buildQueryParam = (key: string, value: string) => {
  return `${key}=${encodeURI(value)}`;
}