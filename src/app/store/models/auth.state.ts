export interface AuthState {
  id: string | null;
  status: 'PENDING' | 'FAILED' | 'SUCCESS' | null;
  token: string | null;
  submittedToUrl: string | null;
  data: any;
  action: any;
  response: any;
}
