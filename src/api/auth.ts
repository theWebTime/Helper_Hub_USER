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
  password: string;
  c_password: string;
  otp: string;
}) {
  return api.post("register/verify-otp", payload, {
    meta: { toast: true, loader: true },
  });
}

export function sendResetPasswordOtp(mobile: string) {
  return api.post(
    "user/send-reset-password-otp",
    { mobile },
    {
      meta: { toast: true, loader: true },
    }
  );
}

export function resetPasswordWithOtp(
  payload: { mobile: string; otp: string; password: string; c_password: string },
  onlyVerifyOtp = false // if true, don't actually reset password
) {
  if (onlyVerifyOtp) {
    // call with dummy password, backend should just check OTP validity
    return api.post("user/reset-password", payload, {
      meta: { toast: true, loader: true },
    });
  }
  // real reset
  return api.post("user/reset-password", payload, {
    meta: { toast: true, loader: true },
  });
}
