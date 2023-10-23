import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://assets.cdn.soomgo.com/data/exam/mock',
});
