import { httpClient } from './axios';

export async function getCleanupQuestionList() {
  try {
    const { data } = await httpClient.get('/cleanup.json');
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
