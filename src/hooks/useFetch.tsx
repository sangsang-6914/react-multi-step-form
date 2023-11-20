import { useQuery } from '@tanstack/react-query';
import { RequestForm } from '../model/question';
import { AxiosError } from 'axios';
import { getServiceQuestionList } from '../api/service';

type RequestType = string;

function useFetch(type: RequestType) {
  const { isLoading, error, data } = useQuery<RequestForm, AxiosError>({
    queryKey: [type],
    queryFn: () => getServiceQuestionList(type),
    retry: 3,
    refetchOnWindowFocus: false,
  });

  return { isLoading, error, data };
}

export default useFetch;
