import { httpClient } from './axios';

export async function getEnglishTutoringQuestionList() {
  try {
    const { data } = await httpClient.get('/english.json');
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
