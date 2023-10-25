import { useQuery } from '@tanstack/react-query';
import { RequestForm } from '../model/question';
import { AxiosError } from 'axios';
import { getCleanupQuestionList } from '../api/cleanup';

function useCleanup() {
  const {
    isLoading,
    error,
    data: cleanupRequestForm,
  } = useQuery<RequestForm, AxiosError>({
    queryKey: ['cleanupRequestForm'],
    queryFn: () => getCleanupQuestionList(),
    retry: 3,
    refetchOnWindowFocus: false,
  });

  return { isLoading, error, cleanupRequestForm };
}

export default useCleanup;
