import { AppState } from '../models/app.state';

const getAuthState = (state: AppState) => state.auth;

export default { getAuthState };
