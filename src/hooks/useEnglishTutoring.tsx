import { useQuery } from '@tanstack/react-query';
import { RequestForm } from '../model/question';
import { AxiosError } from 'axios';
import { getEnglishTutoringQuestionList } from '../api/english';

function useEnglishTutoring() {
  const {
    isLoading,
    error,
    data: englishTutoringRequestForm,
  } = useQuery<RequestForm, AxiosError>({
    queryKey: ['englishTutoringRequestForm'],
    queryFn: () => getEnglishTutoringQuestionList(),
    retry: 3,
    refetchOnWindowFocus: false,
  });

  return { isLoading, error, englishTutoringRequestForm };
}

export default useEnglishTutoring;
