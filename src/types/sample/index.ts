export interface QueryResponse {
  response?: string;
  sql_query_output?: string[];
  error?: string;
}

export interface ChatMessage extends QueryResponse {
  query: string;
}
