// src/api/apiCalls.ts
import api from "./axios";

const API_URL = import.meta.env.VITE_API_URL;

const withToast = () => ({
  meta: { toast: true,  loader: true }
});

export function sendLoginOtp(mobile: string) {
  return api.post(`${API_URL}/user/send-login-otp`, { mobile }, withToast());
}

export function verifyLoginOtp(mobile: string, otp: string) {
  return api.post(`${API_URL}/user/verify-login-otp`, { mobile, otp }, withToast());
}

export function sendRegisterOtp(mobile: string) {
  return api.post(`${API_URL}/register/send-otp`, { mobile }, withToast());
}

export function logout() {
  return api.post(`${API_URL}/logout`, {}, withToast());
}

export function verifyRegisterOtp(payload: {
  name: string;
  email: string;
  mobile: string;
  password: string;
  c_password: string;
  otp: string;
}) {
  return api.post(`${API_URL}/register/verify-otp`, payload, withToast());
}
