import { useQuery } from '@tanstack/react-query';
import { RequestForm } from '../model/question';
import { AxiosError } from 'axios';
import { getEnglishTutoringQuestionList } from '../api/english';
import { getCleanupQuestionList } from '../api/cleanup';

type RequestType = 'cleanup' | 'englishTutoring';

function useFetch(type: RequestType) {
  const { isLoading, error, data } = useQuery<RequestForm, AxiosError>({
    queryKey: [type],
    queryFn: () =>
      type === 'cleanup'
        ? getCleanupQuestionList()
        : getEnglishTutoringQuestionList(),
    retry: 3,
    refetchOnWindowFocus: false,
  });

  return { isLoading, error, data };
}

export default useFetch;
