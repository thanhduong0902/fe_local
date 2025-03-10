import { AuthResponse } from "../types/auth.type";
import http from "../utils/http";

export const URL_LOGIN = "auth/login";
export const URL_REGISTER = "auth/register";
export const URL_LOGOUT = "logout";
export const URL_REFRESH_TOKEN = "refresh-access-token";

const authApi = {
  registerAccount(body: any) {
    console.log(body);
    return http.post<AuthResponse>(URL_REGISTER, body);
  },
  login(body: { username: string; password: string }) {
    return http.post<AuthResponse>(URL_LOGIN, body);
  },
  logout() {
    return http.post(URL_LOGOUT);
  },
};

export default authApi;
