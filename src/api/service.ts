import { httpClient } from './axios';

export async function getServiceQuestionList(type: string) {
  try {
    const { data } = await httpClient.get(`${type}.json`);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
