import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

import { axiosPrivate } from '#/query/api.config';
import { type ErrorResponse } from '#/types/api-response';
import { type QueryResponse } from '#/types/sample';

interface QueryPayload {
  query: string;
  appName: string;
  sessionId: string;
}

const useQueryResult = (
  options?: UseMutationOptions<
    QueryResponse,
    AxiosError<ErrorResponse, any>,
    QueryPayload,
    unknown
  >,
) => {
  return useMutation<QueryResponse, AxiosError<ErrorResponse>, QueryPayload>({
    mutationFn: async ({ query, appName, sessionId }) => {
      const response = await axiosPrivate.post<QueryResponse>(
        `https://salesmate-frontend-demo-axe5fxejf8hrfmeh.eastus2-01.azurewebsites.net/query/?query=${query}&app_name=${appName}&session_id=${sessionId}`,
      );
      return response.data;
    },
    ...options,
  });
};

export { useQueryResult };
