export interface ErrorResponse {
  statusCode: number;
  message: string;
  errorField: string | null | undefined;
  messages: string[];
}

export interface SuccessResponse<Type> {
  data: Type;
}
