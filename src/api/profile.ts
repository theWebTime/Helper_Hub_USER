import api from "./axios";

// GET /profile
export function getProfile() {
  return api.get("profile", {
    meta: { toast: false, loader: true },
  });
}

// PUT /profile/update
export function updateProfile(payload: {
  name: string;
  email: string;
  mobile: string;
}) {
  return api.put("profile/update", payload, {
    meta: { toast: true, loader: true },
  });
}
