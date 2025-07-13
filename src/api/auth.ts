// src/api/apiCalls.ts
import api from "./axios";

export function sendLoginOtp(mobile: string) {
  return api.post(
    "user/send-login-otp",
    { mobile },
    {
      meta: { toast: true, loader: true },
    }
  );
}

export function verifyLoginOtp(mobile: string, otp: string) {
  return api.post(
    "user/verify-login-otp",
    { mobile, otp },
    {
      meta: { toast: true, loader: true },
    }
  );
}

export function sendRegisterOtp(mobile: string) {
  return api.post(
    "register/send-otp",
    { mobile },
    {
      meta: { toast: true, loader: true },
    }
  );
}

export function logout() {
  return api.post(
    "logout",
    {},
    {
      meta: { toast: true, loader: true },
    }
  );
}

export function verifyRegisterOtp(payload: {
  name: string;
  email: string;
  mobile: string;
  otp: string;
}) {
  return api.post("register/verify-otp", payload, {
    meta: { toast: true, loader: true },
  });
}

